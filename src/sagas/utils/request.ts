import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from '../../app/AxiosProvider'
import { UNAUTHORIZED } from 'http-status'
import showToast from '../../utils/showToast'
import i18n from 'i18next'
import { put, select } from 'redux-saga/effects'
import { datasetSelector } from '../../redux/selectors'
import { logoutSagaAction } from '../actions'

export interface Response {
  data: any
  error: boolean
  message: string
  response: any
}

export interface Options extends AxiosRequestConfig {
  show_message?: boolean
  debug?: boolean
  checkAuth?: boolean
}

function* request(
  options: Options = { show_message: false, debug: false, checkAuth: true }
) {
  var result: Response = {
    data: null,
    error: false,
    message: '',
    response: null,
  }

  try {
    if (options.debug)
      console.log(`\n<=== === REQUEST === ===> [${options.url}]`, {
        ...options,
      })

    const auth_token: string = yield select((state) =>
      datasetSelector(state, 'auth_token')
    )
    if (!options.headers) options.headers = {}
    if (!!auth_token) options.headers['Authorization'] = `Bearer ${auth_token}`
    let response = yield axiosInstance.request(options)

    if (options.debug)
      console.log(`<=== === RESPONSE === ===> [${options.url}]`, {
        response,
        options,
      })

    if (`${response?.status}`.startsWith('2'))
      result = {
        error: false,
        data: response?.data,
        message: i18n.t(response?.data?.message) || response?.statusText,
        response,
      }
    else
      result = {
        error: true,
        data: response?.data,
        message: i18n.t(response?.data?.message) || response?.statusText,
        response,
      }
  } catch (error) {
    console.log(`<=== === ERROR-CATCHED === ===> [${options.url}]`, {
      error,
      error_json: error?.toJSON?.(),
    })

    if (!!error?.response?.config)
      result = {
        error: true,
        message: i18n.t(error?.response?.data?.message) || error.message,
        data: error?.response?.data || null,
        response: error?.response,
      }
    else
      result = {
        error: true,
        message: i18n.t(error?.response?.data?.message) || error.message,
        data: error,
        response: error?.response,
      }

    if (!!result['message'] && options?.['show_message'])
      showToast(result['message'], {
        type: !!error ? 'error' : 'sucess',
      })
  }

  if (!!options['checkAuth'] && result['response']['status'] === UNAUTHORIZED) {
    yield put(logoutSagaAction())
  }

  if (options.debug)
    console.log(`<=== === RESULT === ===> [${options.url}]`, { result }, '\n')

  return result
}

export default request

import { call, select, put } from 'redux-saga/effects'
import showToast from '../utils/showToast'
import HttpStatus from 'http-status-codes'
import axios from 'axios'
import i18n from '../app/i18n'
import { checkNetworkStatusAction, logoutAction } from './actions'
import moment from 'moment'
import { API_KEY, debug_requests } from '../../env.json'
import { datasetSelector } from '../redux/selectors'

var connErrMsg = 'Connection Error.'

export default function* request(options: any) {
  var startTime: any = {},
    endTime: any = {},
    network: any = {},
    auth,
    response: any = {},
    data = {},
    error = null,
    message,
    defaultOptions: any = {
      timeout: 30000,
      headers: {
        Authorization: null,
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
      debug: debug_requests,
    }

  try {
    /* 
        network = yield select(networkSelector)
        if (!!network && !network.isConnected) {
            //message = yield call(i18n.t, 'ECONNABORTED')
            message = yield i18n.t('ECONNABORTED')
            error = true
            throw { error, message, data }
        } 
        */
    options = { ...defaultOptions, ...options }
    if (options.debug) startTime = moment(new Date())

    yield put(checkNetworkStatusAction())
    auth = yield select((state) => datasetSelector(state, 'auth'))
    if (!!auth.token)
      defaultOptions.headers.Authorization = `Bearer ${auth.token}`
    if (options.debug)
      console.log(
        `\n<==========REQUEST[${options.url}][${options.method}]=========>\n`,
        { options, auth, startTime, endTime },
        '\n<====================================================================================>\n'
      )
    response = yield call(axios, options)
    if (!response || !Object.keys(response).length)
      throw { error: true, data, message: connErrMsg }
    if (!!response.data.data) {
      data = response.data.data
      error = response.data.error
      message = response.data.message
    } else if (!!response.data) {
      data = response.data
      error = false
      message = null
    }
  } catch (err) {
    error = true
    if (!!err.response && !!err.response.data) {
      if (err.response.data.error !== undefined) error = err.response.data.error
      response = err.response

      if (
        !!response &&
        !!response['headers'] &&
        !!response['headers']['content-type'] &&
        response['headers']['content-type'] === 'text/html'
      )
        data = {}
      else data = response.data.data

      message = response.data.message
    } else if (!!err.code) {
      switch (err.code) {
        case 'ECONNABORTED':
          message = connErrMsg
          break
        default:
          message = err.message
          break
      }
    } else if (!!err.message) {
      message = err.message
    }
    if (options.debug)
      console.log('REQUEST ERROR!!!! ===> ', { err, response, data, message })
  } finally {
    if (options.debug) {
      endTime = moment(new Date())
      let diffTime = endTime.diff(startTime, 'seconds', true)
      startTime = startTime.format('HH:mm:ss')
      endTime = endTime.format('HH:mm:ss')
      console.log(
        `\n<==========RESPONSE[${options.url}][${options.method}]=========>\n`,
        {
          options,
          response,
          data,
          error,
          message,
          startTime,
          endTime,
          diffTime,
        },
        '\n<====================================================================================>\n'
      )
    }

    switch (response.status) {
      case HttpStatus.NOT_FOUND:
        yield showToast(i18n.t('data_not_found'), { type: 'danger' })
        break
      case HttpStatus.UNAUTHORIZED:
        yield showToast(message, { type: 'danger' })
        yield put(logoutAction())
        break
    }
    //console.log('FINALLY =====> ', { response, data, error, message })
    return { response, data, error, message }
  }
}

import { call, put } from 'redux-saga/effects'
import { REGISTER_SAGA } from './constants'
import { takeLatest } from 'redux-saga/effects'
import showToast from '../utils/showToast'
import { setDatasetToReducer } from '../redux/actions'
import { registerRoute } from '../api/routes'
import * as RootNavigation from '../app/NavigationProvider/service'
import { CommonActions } from '@react-navigation/native'
import request from './utils/request'

export function* register({
  name = '',
  email = '',
  password = '',
  password_confirmation = '',
}) {
  yield put(setDatasetToReducer(true, 'register_screen_is_loading'))
  let { error, data } = yield call(request, {
    url: registerRoute,
    method: 'POST',
    data: {
      name,
      email,
      password,
      password_confirmation,
    },
    //debug: true,
  })
  yield put(setDatasetToReducer(false, 'register_screen_is_loading'))
  if (!!error) {
    let message = Object.keys(data?.errors || {})
      .map?.((key: string) => data?.errors[key])
      .join('\n')

    if (!!message) yield showToast(message, { type: 'danger', duration: 10000 })
    return
  }
  RootNavigation.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] })
  )
  yield showToast('user_created_correctly', { type: 'success' })
}

export default function* loginSagas() {
  yield takeLatest(REGISTER_SAGA, register)
}

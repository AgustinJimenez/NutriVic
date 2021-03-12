import { call, put } from 'redux-saga/effects'
import { LOGIN_SAGA } from './constants'
import { takeLatest } from 'redux-saga/effects'
import showToast from '../utils/showToast'
import { setDatasetToReducer } from '../redux/actions'
import { loginRoute, profileRoute } from '../api/routes'
import { UNAUTHORIZED } from 'http-status-codes'
import request from './utils/request'
import * as RootNavigation from '../app/NavigationProvider/service'
import { CommonActions } from '@react-navigation/native'

export function* login({ email = '', password = '' }) {
  yield put(setDatasetToReducer(true, 'login_is_loading'))
  var { error, data, response } = yield call(request, {
    url: loginRoute,
    method: 'POST',
    data: {
      email,
      password,
    },
    //debug: true,
  })

  if (!!error && response.status === UNAUTHORIZED) {
    yield showToast('invalid_credentials', { type: 'danger' })
    yield put(setDatasetToReducer(false, 'login_is_loading'))
    return
  }

  yield put(setDatasetToReducer(data.access_token, 'auth_token'))
  var { error, data, response } = yield call(request, {
    url: profileRoute,
    //debug: true,
  })
  if (!error) yield put(setDatasetToReducer(data, 'profile'))

  yield showToast('welcome', { type: 'success' })
  yield put(setDatasetToReducer(false, 'login_is_loading'))

  RootNavigation.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name: 'Home' }] })
  )
}

export default function* loginSagas() {
  yield takeLatest(LOGIN_SAGA, login)
}

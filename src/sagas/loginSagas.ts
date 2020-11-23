import { call, put /* , call  */ } from 'redux-saga/effects'
import { LOGIN_SAGA } from './constants'
//import { setAuthDatasetAction, setAppointmentsDatasetAction, clearReasonsReducerAction, clearClientsReducerAction } from '../actions'
import { takeLatest } from 'redux-saga/effects'
import showToast from '../utils/showToast'
//import { loginRoute, userInfoRoute } from '../api/routes'
//import request from './request'
import { setDatasetToReducer } from '../redux/actions'
import sleep from '../utils/sleep'
import * as RootNavigation from '../app/NavigationProvider/service'

export function* login({ email = '', password = '' }) {
  /* 
    var { data, error, message } = yield call(request, {
        url: loginRoute,
        params: { name, password },
        method: 'POST',
        //debug: true,
    })
    if (error) {
        yield showToast(message, { type: 'danger' })
        onFinishCallback()
        return
    }
    onFinishCallback()
 */

  yield put(setDatasetToReducer(true, 'login_is_loading'))
  yield call(sleep, 1000)
  yield put(setDatasetToReducer(false, 'login_is_loading'))
  console.log('LOGIN SAGA !!!!', { email, password })
  yield showToast('Login Success', { type: 'success' })
  yield put(setDatasetToReducer('ABC123', 'auth_token'))
}

export default function* loginSagas() {
  yield takeLatest(LOGIN_SAGA, login)
}

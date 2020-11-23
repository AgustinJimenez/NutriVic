import { put, takeLatest } from 'redux-saga/effects'
import { LOGOUT_SAGA } from './constants'
import { setDatasetToReducer } from '../redux/actions'

function* logout() {
  yield put(setDatasetToReducer(null, 'auth_token'))
}

export default function* logoutSaga() {
  yield takeLatest(LOGOUT_SAGA, logout)
}

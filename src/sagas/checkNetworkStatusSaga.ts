import { put } from 'redux-saga/effects'
import { CHECK_NETWORK_SAGA } from './constants'
import { setNetworkStatusAction } from './actions'
import { takeLatest } from 'redux-saga/effects'
import NetInfo from '@react-native-community/netinfo'
export function* checkNetworkStatus() {
  let status = yield NetInfo.fetch()
  yield put(setNetworkStatusAction(status))
}
export default function* createAppointmentSaga() {
  yield takeLatest(CHECK_NETWORK_SAGA, checkNetworkStatus)
}

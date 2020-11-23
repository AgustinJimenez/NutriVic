import { put } from 'redux-saga/effects'
import { UPDATE_NETWORK_STATUS_SAGAS } from './constants'
import { setNetworkStatusAction } from './actions'
import { takeLatest } from 'redux-saga/effects'

export function* updateNetworkStatus({ network }: any) {
  yield put(setNetworkStatusAction(network))
}
export default function* updateNetworkStatusSagas() {
  yield takeLatest(UPDATE_NETWORK_STATUS_SAGAS, updateNetworkStatus)
}

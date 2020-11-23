import { takeLatest, put } from 'redux-saga/effects'
import { CLEAR_REDUCER_SAGA } from './constants'
import { setDatasetToReducer } from '../redux/actions'
import datasetInitialState from '../redux/initialState.json'
function* clearReducers() {
  delete datasetInitialState['login_email']
  delete datasetInitialState['fcm_token']
  yield put(setDatasetToReducer(datasetInitialState))
}

export default function* clearReducersSaga() {
  yield takeLatest(CLEAR_REDUCER_SAGA, clearReducers)
}

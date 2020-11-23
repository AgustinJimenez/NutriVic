import { call, put, takeEvery } from 'redux-saga/effects'
import { CALLBACK_VOID_SAGA } from './constants'

function* voidFunction({ actions = [], callback = () => {} }) {
  if (!Array.isArray(actions)) actions = [actions]

  for (let action of actions) yield put(action)

  if (typeof callback === 'function') yield call(callback)
}

export default function* callbackVoidSaga() {
  yield takeEvery(CALLBACK_VOID_SAGA, voidFunction)
}

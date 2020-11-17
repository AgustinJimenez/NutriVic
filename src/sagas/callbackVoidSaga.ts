import { call, put, takeEvery } from 'redux-saga/effects'
import { CALLBACK_VOID_SAGA } from '../actions/types'

function* voidFunction({ actions = [], callback = () => {} }) {
  if (!Array.isArray(actions)) actions = [actions]
  console.log('callbackVoidSaga ===> ', { actions, callback })
  for (let action of actions) yield put(action)

  yield callback()
}

export default function* callbackVoidSaga() {
  yield takeEvery(CALLBACK_VOID_SAGA, voidFunction)
}

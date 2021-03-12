import { call, put, select, takeLatest } from 'redux-saga/effects'
import { LOGOUT_SAGA } from './constants'
import {
  setDatasetToReducer,
  setMultipleDatasetsToReducer,
} from '../redux/actions'
import { CommonActions } from '@react-navigation/native'
import { logoutRoute } from '../api/routes'
import * as RootNavigation from '../app/NavigationProvider/service'
import request from './utils/request'
import { datasetSelector } from '../redux/selectors'

function* logout() {
  const auth_token = yield select((state) =>
    datasetSelector(state, 'auth_token')
  )

  if (!!auth_token) {
    var { error, data, response } = yield call(request, {
      method: 'POST',
      url: logoutRoute,
      //debug: true,
      checkAuth: false,
    })

    yield put(
      setMultipleDatasetsToReducer([
        setDatasetToReducer(null, 'auth_token'),
        setDatasetToReducer(null, 'profile'),
        setDatasetToReducer([], 'request_budget_products'),
      ])
    )
  }

  RootNavigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: 'Welcome' }, { name: 'Login' }],
    })
  )
}

export default function* logoutSaga() {
  yield takeLatest(LOGOUT_SAGA, logout)
}

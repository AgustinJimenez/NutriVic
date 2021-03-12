import { call, put, select, takeLatest } from 'redux-saga/effects'
import { REQUEST_BUDGET_SAGA } from './constants'
import { setDatasetToReducer } from '../redux/actions'
import { CommonActions } from '@react-navigation/native'
import { requestBudgetRoute } from '../api/routes'
import * as RootNavigation from '../app/NavigationProvider/service'
import request from './utils/request'
import { datasetSelector } from '../redux/selectors'
import showToast from '../utils/showToast'

function* requestBudget() {
  const auth_token = yield select((state) =>
    datasetSelector(state, 'auth_token')
  )
  if (!auth_token)
    return yield showToast('must_login_to_request_budget', {
      type: 'danger',
      duration: 10000,
    })

  const profile = yield select((state) => datasetSelector(state, 'profile'))
  const request_budget_products = yield select((state) =>
    datasetSelector(state, 'request_budget_products')
  )
  yield put(setDatasetToReducer(true, 'sending_budget_request'))
  var { error, data, response } = yield call(request, {
    method: 'POST',
    url: requestBudgetRoute,
    data: {
      user_id: profile['id'],
      details: request_budget_products.all(),
    },
    //debug: true,
  })
  yield put(setDatasetToReducer(false, 'sending_budget_request'))

  if (!!error) {
    yield showToast('unexpected_error', { type: 'danger' })
    return
  }

  yield put(setDatasetToReducer([], 'request_budget_products'))
  RootNavigation.navigate('BudgetConfirm')
}

export default function* logoutSaga() {
  yield takeLatest(REQUEST_BUDGET_SAGA, requestBudget)
}

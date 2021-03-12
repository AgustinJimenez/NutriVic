import { all } from 'redux-saga/effects'
import changeLanguageSagas from './changeLanguageSagas'
import loginSagas from './loginSagas'
import updateNetworkStatusSagas from './updateNetworkStatusSagas'
import checkNetworkStatusSaga from './checkNetworkStatusSaga'
import logoutSaga from './logoutSaga'
import callbackVoidSaga from './callbackVoidSaga'
import registerSaga from './registerSaga'
import homeSaga from './homeSaga'
import requestBudgetSaga from './requestBudgetSaga'

export default function* rootSaga() {
  yield all([
    logoutSaga(),
    checkNetworkStatusSaga(),
    updateNetworkStatusSagas(),
    loginSagas(),
    changeLanguageSagas(),
    callbackVoidSaga(),
    registerSaga(),
    homeSaga(),
    requestBudgetSaga(),
  ])
}

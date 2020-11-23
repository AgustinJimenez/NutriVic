import { select, put, takeLatest } from 'redux-saga/effects'
import { CHANGE_LANGUAGE_SAGAS } from './constants'
import { setLangReducer } from './actions'
import showToast from '../utils/showToast'
import i18n from '../app/i18n'
import { datasetSelector } from '../redux/selectors'

function* changeLanguage({ lang_id, onFinishCallback }: any) {
  yield put(setLangReducer(lang_id))

  let lang = yield select((state) => datasetSelector(state, 'lang'))

  i18n.changeLanguage(lang)

  yield showToast(i18n.t('language_changed'), { type: 'success' })
}

export default function* changeLanguageSagas() {
  yield takeLatest(CHANGE_LANGUAGE_SAGAS, changeLanguage)
}

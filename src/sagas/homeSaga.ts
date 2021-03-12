import { call, put } from 'redux-saga/effects'
import { HOME_SAGA } from './constants'
import { takeLatest } from 'redux-saga/effects'
import {
  setDatasetToReducer,
  setMultipleDatasetsToReducer,
} from '../redux/actions'
import {
  categoriesRoute,
  sectorsRoute,
  speciesRoute,
  productsRoute,
} from '../api/routes'
import request from './utils/request'
import ListToObjectList from '../helpers/ListToObjectList'

export function* home({}) {
  yield put(setDatasetToReducer(true, 'home_screen_is_loading'))

  var { error, data, response } = yield call(request, {
    url: speciesRoute,
    //debug: true,
  })
  let species = data?.['species']

  var { error, data, response } = yield call(request, {
    url: sectorsRoute,
    //debug: true,
  })
  let sectors = data?.['sectors']

  var { error, data, response } = yield call(request, {
    url: categoriesRoute,
    //debug: true,
  })
  let categories = data?.['categories']

  var { error, data, response } = yield call(request, {
    url: productsRoute,
    //debug: true,
  })
  let products = data?.['products']

  yield put(
    setMultipleDatasetsToReducer([
      setDatasetToReducer(ListToObjectList(categories), 'categories'),
      setDatasetToReducer(ListToObjectList(sectors), 'sectors'),
      setDatasetToReducer(ListToObjectList(species), 'species'),
      setDatasetToReducer(ListToObjectList(products), 'products'),
      setDatasetToReducer(false, 'home_screen_is_loading'),
    ])
  )
}

export default function* loginSagas() {
  yield takeLatest(HOME_SAGA, home)
}

import { SET_ITEM_TO_DATASET_REDUCER, DELETE_ITEM_FROM_DATASET_LIST_REDUCER, SET_ITEM_TO_DATASET_LIST_REDUCER } from './constants.json'
import initialState from './initialState.json'
const debug = false
let datasetReducer = (state:any = initialState, action: any) => {
  let { type, data, dataset_name, options = { key: '' } } = action
  if (debug) console.log('REDUCERS - datasetReducer ===> ', { action })
  //throw 'REDUCER FETCH NAME IS REQUIRED'

  switch (type) {
    case SET_ITEM_TO_DATASET_REDUCER:
      if (!dataset_name) state = { ...state, ...data }
      else if (!!options['key']) state[dataset_name][options.key] = data
      else state[dataset_name] = data
      state = { ...state }
      break

    case SET_ITEM_TO_DATASET_LIST_REDUCER:
      if (!!data.id && !!state[dataset_name]) {
        state[dataset_name][data.id] = data
        state = { ...state }
      }
      break
    case DELETE_ITEM_FROM_DATASET_LIST_REDUCER:
      if (!!data.id && !!state[dataset_name] && !!state[dataset_name][data.id]) {
        delete state[dataset_name][data.id]
        state = { ...state }
      }
      break
  }
  return state
}

//export default Reducer(datasetReducer)
export default datasetReducer

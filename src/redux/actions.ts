import { SET_ITEM_TO_DATASET_REDUCER } from './constants.json'
import ListToObjectList from '../helpers/ListToObjectList'

export const setDatasetToReducer = (data: any, dataset_name: string) => ({
  type: SET_ITEM_TO_DATASET_REDUCER,
  dataset_name,
  data,
})

export const setDatasetListToObjectReducer = (
  data: any,
  dataset_name: string
) => ({
  type: SET_ITEM_TO_DATASET_REDUCER,
  dataset_name,
  data: ListToObjectList(data),
})

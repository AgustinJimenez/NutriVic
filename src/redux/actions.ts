import { SET_ITEM_TO_DATASET_REDUCER } from './constants.json'
import ListToObjectList from '../helpers/ListToObjectList'

export const setDatasetToReducer = (data: any, dataset_name: string) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name,
    data,
})

export const setDatasetListToObjectReducer = (data: any, dataset_name: string) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name,
    data: ListToObjectList(data),
})

export const setHomeActionsPorcentageActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'home_actions_porcentage',
    data,
})

export const setHomeMentalFocusPorcentageActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'home_mental_focus_porcentage',
    data,
})

export const setHabitsActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'habits',
    data,
})

export const setActionHabitsActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'action_habits',
    data,
})

export const setObjectivesActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'objectives',
    data,
})

export const setImemiActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'imei',
    data,
})

export const setTimezoneActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'timezone',
    data,
})

export const setTokenActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'token',
    data,
})

export const setTokenTypeActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'token_type',
    data,
})

export const setQuestionsActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'questions',
    data,
})

export const setAnswersTypesActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'answers_types',
    data,
})

export const setFocusingMediumsActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'focusing_mediums',
    data,
})

export const setUsersPendingQuestionsActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'questions',
    data,
})

export const setIntroTokenActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'intro_token',
    data,
})

export const setCategoriesActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'categories',
    data,
})

export const setCategoriesCompleteActionReducer = (data: any) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name: 'categories_complete',
    data,
})

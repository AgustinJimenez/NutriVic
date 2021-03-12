import {
  AUTH_SAGAS,
  FETCH_CLIENTS_SAGAS,
  UPDATE_NETWORK_STATUS_SAGAS,
  SET_ON_DATASET_REDUCER,
  PUSH_TO_DATASET_LIST_REDUCER,
  UPDATE_TO_DATASET_LIST_REDUCER,
  DELETE_DATASET_LIST_REDUCER,
  FETCH_REASONS_SAGAS,
  CHANGE_LANGUAGE_SAGAS,
  FETCH_CLIENTS_REDUCER,
  FETCH_REASONS_REDUCER,
  CHECK_NETWORK_SAGA,
  RUN_TASKS_SAGA,
  LOGOUT_SAGA,
  SET_NOTIFICTION_REDUCER,
  CLEAR_NOTIFICTIONS_REDUCER,
  SET_NOTIFICTION_SAGA,
  NOTIFICATION_WAS_TAPPED_SAGA,
  LOGIN_SAGA,
  REGISTER_SAGA,
  HOME_SAGA,
  REQUEST_BUDGET_SAGA,
} from './constants'

export const actionAuthSaga = (params: any, onFinishCallback: Function) => ({
  type: AUTH_SAGAS,
  onFinishCallback,
  ...params,
})
export const fetchClientsAction = ({
  onFinishCallback,
  clientsIds,
  searchName,
}: any) => ({
  type: FETCH_CLIENTS_SAGAS,
  onFinishCallback,
  clientsIds,
  searchName,
})
export const setClientsReducerAction = (data: any) => ({
  type: FETCH_CLIENTS_REDUCER,
  data,
})
export const fetchReasonsAction = ({
  onFinishCallback,
  searchName,
  ids,
}: any) => ({
  type: FETCH_REASONS_SAGAS,
  onFinishCallback,
  searchName,
  ids,
})
export const setReasonsReducerAction = (data: any) => ({
  type: FETCH_REASONS_REDUCER,
  data,
})
export const updatNetworkStatusAction = (network: any) => ({
  type: UPDATE_NETWORK_STATUS_SAGAS,
  network,
})
export const checkNetworkStatusAction = () => ({
  type: CHECK_NETWORK_SAGA,
})
export const setNetworkStatusAction = (network: any) => ({
  type: SET_ON_DATASET_REDUCER,
  dataset_name: 'network',
  data: network,
})
export const setAuthDatasetAction = (data: any) => ({
  type: SET_ON_DATASET_REDUCER,
  dataset_name: 'auth_token',
  data,
})
export const logoutSagaAction = () => ({
  type: LOGOUT_SAGA,
})
export const setLangReducer = (lang_id: string) => ({
  type: SET_ON_DATASET_REDUCER,
  dataset_name: 'lang',
  data: lang_id,
})
export const setLangSaga = (lang_id: string) => ({
  type: CHANGE_LANGUAGE_SAGAS,
  lang_id,
})
export const pushNewItemToDatasetListAction = (
  data: any,
  dataset_name: string
) => ({
  type: PUSH_TO_DATASET_LIST_REDUCER,
  dataset_name,
  data,
})
export const updateItemToDatasetList = (
  data: any,
  dataset_name: string,
  afterFinishCallback?: Function
) => ({
  type: UPDATE_TO_DATASET_LIST_REDUCER,
  dataset_name,
  data,
  afterFinishCallback,
})
export const deleteItemFromDatasetList = (
  data: any,
  dataset_name: string,
  afterFinishCallback: Function
) => ({
  type: DELETE_DATASET_LIST_REDUCER,
  dataset_name,
  data,
  afterFinishCallback,
})
export const runTasksSaga = ({ afterFinishCallback }: any) => ({
  type: RUN_TASKS_SAGA,
  afterFinishCallback,
})
export const setNotificationSagaAction = (
  data: any,
  afterFinishCallback?: Function
) => ({
  type: SET_NOTIFICTION_SAGA,
  data,
  afterFinishCallback,
})
export const notificationWasTappedAction = (
  data: any,
  afterFinishCallback?: Function
) => ({
  type: NOTIFICATION_WAS_TAPPED_SAGA,
  data,
  afterFinishCallback,
})
export const setNotificationReducerAction = (data: any) => ({
  type: SET_NOTIFICTION_REDUCER,
  data,
})
export const clearNotificationsReducerAction = () => ({
  type: CLEAR_NOTIFICTIONS_REDUCER,
})
export const logAction = (email: string, password: string) => ({
  type: LOGIN_SAGA,
  email,
  password,
})
export const registerSagaAction = (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) => ({
  type: REGISTER_SAGA,
  name,
  email,
  password,
  password_confirmation,
})
export const homeSagaAction = () => ({
  type: HOME_SAGA,
})
export const requestBudgetSagaAction = () => ({
  type: REQUEST_BUDGET_SAGA,
})

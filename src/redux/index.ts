import { combineReducers } from 'redux'
import datasetReducer from './datasetReducer'

export default combineReducers({
    datasets: datasetReducer,
})

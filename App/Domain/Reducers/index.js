import { combineReducers } from 'redux'
import MarkerReducer from './MarkerReducer'

export default combineReducers({
    markers: MarkerReducer
  })
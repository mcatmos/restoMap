import { combineReducers } from 'redux'
import MarkerReducer from './MarkerReducer'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'

export default combineReducers({
    markers: MarkerReducer,
    ui: UIReducer,
    search: SearchReducer
  })
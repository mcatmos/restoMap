import { combineReducers } from 'redux'
import MarkerReducer from './MarkerReducer'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import LocationReducer from './LocationReducer'

export default combineReducers({
    markers: MarkerReducer,
    ui: UIReducer,
    search: SearchReducer,
    location: LocationReducer
  })
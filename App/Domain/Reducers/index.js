import { persistCombineReducers } from 'redux-persist'
import MarkerReducer from './MarkerReducer'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import LocationReducer from './LocationReducer'
import LoginReducer from './LoginReducer'
import { AsyncStorage } from 'react-native'

export default persistCombineReducers(
  {
    active: true,
    key: 'login',
    reducerVersion: '1',
    storage: AsyncStorage
  },{
    markers: MarkerReducer,
    ui: UIReducer,
    search: SearchReducer,
    location: LocationReducer,
    login: LoginReducer
  })
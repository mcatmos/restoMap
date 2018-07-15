import { persistCombineReducers } from 'redux-persist'
import MarkerReducer from './MarkerReducer'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import LocationReducer from './LocationReducer'
import LoginReducer from './LoginReducer'
import { AsyncStorage } from 'react-native'
import { REQUEST_LOGOUT_SUCCESS } from '../Actions/LoginActions'
import UsersReducer from './UsersReducer'

 const appReducer = persistCombineReducers(
  {
    active: true,
    key: 'login',
    reducerVersion: '1',
    storage: AsyncStorage
  },
  {
    markers: MarkerReducer,
    ui: UIReducer,
    search: SearchReducer,
    location: LocationReducer,
    login: LoginReducer,
    users: UsersReducer
  }
)

export default rootReducer = (state, action) => {
  if (action.type === REQUEST_LOGOUT_SUCCESS) {
    
    Object.keys(state).forEach(key => {
      AsyncStorage.removeItem(`persist:${key}`);
    })

    state = {
      location: state.location,
      ...undefined
    }
  }

  return appReducer(state, action)
}

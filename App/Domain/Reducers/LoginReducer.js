import { 
  REQUEST_LOGIN, 
  REQUEST_LOGIN_SUCCESS
} from '../Actions/LoginActions'
import {
  REQUEST_USER_INFO_SUCCESS
} from '../Actions/UserActions'

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  loginSuccessful: false
}

export default LoginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_LOGIN_SUCCESS: 
      return {
        user: action.payload,
        userId: action.payload.uid,
        isFetching: false,
        loginSuccessful: true
      }
    case REQUEST_USER_INFO_SUCCESS:
      return {
        ...state,
        user: Object.assign({}, state.user, action.payload)
      }
    default:
      return state
  }
}
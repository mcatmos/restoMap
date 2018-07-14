import { 
  REQUEST_LOGIN, 
  REQUEST_LOGIN_SUCCESS 
} from '../Actions/LoginActions'

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
    default:
      return state
  }
}
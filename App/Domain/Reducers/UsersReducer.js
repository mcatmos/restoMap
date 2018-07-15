import { REQUEST_USER_FOLLOWERS_SUCCESS } from '../Actions/UserActions'

const INITIAL_STATE = {}

export default UsersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_USER_FOLLOWERS_SUCCESS:
      return { ...state.users, ...action.payload }
    default:
      return state
  }
}
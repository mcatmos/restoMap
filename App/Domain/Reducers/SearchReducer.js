import { REQUEST_SEARCH_SUCCESS } from '../Actions/SearchActions'

const INITIAL_STATE = {
  results: null
}

export default SearchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        fetching: false
      }
    default:
     return state
  }
}
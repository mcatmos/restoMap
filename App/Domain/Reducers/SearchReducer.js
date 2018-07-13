import { 
  REQUEST_SEARCH_SUCCESS, 
  REQUEST_AUTOCOMPLETE_SEARCH_SUCCESS, 
  RESET_AUTOCOMPLETE_SEARCH,
  REQUEST_SEARCH,
  REQUEST_AUTOCOMPLETE_SEARCH,
  REQUEST_SEARCH_DETAILS_SUCCESS
} from '../Actions/SearchActions'

const INITIAL_STATE = {
  results: null,
  autocomplete: null,
  details: null,
  fetching: false
}

export default SearchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_SEARCH:
    case REQUEST_AUTOCOMPLETE_SEARCH:
      return {
        ...state,
        fetching: true
      }
    case REQUEST_SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        fetching: false
      }
    case REQUEST_AUTOCOMPLETE_SEARCH_SUCCESS:
      return {
        ...state,
        autocomplete: action.payload,
        fetching: false
      }
    case RESET_AUTOCOMPLETE_SEARCH: 
      return {
        ...state,
        autocomplete: null
      }
    case REQUEST_SEARCH_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload
      }
    default:
     return state
  }
}
import {
  LOCATION_ACTION_SET_POSITION,
  LOCATION_ACTION_SET_ERROR,
  LOCATION_ACTION_REQUEST
} from '../Actions/LocationActions'

const INITIAL_STATE = {
  position: null,
  error: null,
  fetching: false
}

export default LocationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOCATION_ACTION_REQUEST: {
      return {
        ...state,
        fetching: true
      }
    }
    case LOCATION_ACTION_SET_POSITION: {
      const { position } = action

      return {
        ...state,
        position,
        error: null,
        fetching: false
      }
    }
    case LOCATION_ACTION_SET_ERROR : {
      const { error } = action

      return {
        ...state,
        error,
        fetching: false
      }
    }
    default:
      return state
  }
}
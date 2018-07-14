import { ADD_MARKER, ADD_NEW_MARKER } from '../Actions/MarkerActions'

const INITIAL_STATE = {}

export default MarkerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_MARKER:
    case ADD_NEW_MARKER:
      return { 
        ...state,
        [action.payload.place_id]: action.payload
      }
    default:
      return state
  }
}
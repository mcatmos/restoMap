import { ADD_MARKER } from '../Actions/MarkerActions'

const INITIAL_STATE = []

export default MarkerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_MARKER:
      return [ ...state, action.payload ]
    default:
      return state
  }
}
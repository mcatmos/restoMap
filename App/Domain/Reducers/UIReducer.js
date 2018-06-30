import { SHOW_RESULT_CARDS, HIDE_RESULT_CARDS } from '../Actions/UIActions'

const INITIAL_STATE = {
  showResultCards: false
}

export default UIReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_RESULT_CARDS:
      return {
        ...state,
        showResultCards: true
      }
    case HIDE_RESULT_CARDS:
      return {
        ...state,
        showResultCards: false
      }
    default:
      return state
  }
}
import { 
  SHOW_RESULT_CARDS, 
  HIDE_RESULT_CARDS, 
  APP_IS_READY
} from '../Actions/UIActions'

const INITIAL_STATE = {
  showResultCards: false,
  appIsReady: false
}

export default UIReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case APP_IS_READY: 
      return {
        ...state,
        appIsReady: true
      }
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
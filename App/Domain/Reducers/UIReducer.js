import { 
  SHOW_RESULT_CARDS, 
  HIDE_RESULT_CARDS,
  SHOW_MODAL,
  HIDE_MODAL
} from '../Actions/UIActions'

const INITIAL_STATE = {
  showResultCards: false,
  modal: {
    showModal: false,
    placeId: null
  }
}

export default UIReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_MODAL: 
      return {
        ...state,
        modal: {
          showModal: true,
          placeId: action.payload.placeId
        }
      }
    case HIDE_MODAL:
      return {
        ...state,
        modal: {
          showModal: false,
          placeId: null
        }
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
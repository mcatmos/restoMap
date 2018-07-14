export const SHOW_RESULT_CARDS = 'SHOW_RESULT_CARDS'
export const HIDE_RESULT_CARDS = 'HIDE_RESULT_CARDS'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const showResultCards = (results) => {
  return {
    type: SHOW_RESULT_CARDS
  }
}

export const hideResultCards = (results) => {
  return {
    type: HIDE_RESULT_CARDS
  }
}

export const showModal = (placeId) => {
  return {
    type: SHOW_MODAL,
    payload: {
      placeId
    }
  }
}

export const hideModal = () => ({
  type: HIDE_MODAL
})


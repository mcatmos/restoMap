export const SHOW_RESULT_CARDS = 'SHOW_RESULT_CARDS'
export const HIDE_RESULT_CARDS = 'HIDE_RESULT_CARDS'
export const APP_IS_READY = 'APP_IS_READY'

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

export const appIsReady = () => {
  return {
    type: APP_IS_READY
  }
}




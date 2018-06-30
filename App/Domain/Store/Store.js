import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

export default (reducers) => {
  const middleWare = applyMiddleware(logger)
  const store = createStore(reducers, middleWare)
  return store
}
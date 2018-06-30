import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import SagaRoot from '../Saga/SagaRoot'

export default (reducers) => {
  const components = []
  const sagaMiddleware = createSagaMiddleware()
  components.push(sagaMiddleware)
  components.push(logger)

  const middleWare = applyMiddleware(...components)
  const store = createStore(reducers, middleWare)
  sagaMiddleware.run(SagaRoot)
  return store
}
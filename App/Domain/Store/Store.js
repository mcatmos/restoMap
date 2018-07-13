import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import SagaRoot from '../Saga/SagaRoot'
import { appIsReady } from '../Actions/UIActions'

export default (reducers) => {
  const components = []
  const sagaMiddleware = createSagaMiddleware()
  
  components.push(sagaMiddleware)
  components.push(logger)
  const middleWare = applyMiddleware(...components)
  
  const store = createStore(reducers, middleWare)
  const persistor = persistStore(store)
  
  sagaMiddleware.run(SagaRoot)

  return { 
    store,
    persistor
  }
}
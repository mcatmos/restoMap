import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import SagaRoot from '../Saga/SagaRoot'
import { appIsReady } from '../Actions/UIActions'

export default (reducers) => {
  const components = []
  const sagaMiddleware = createSagaMiddleware()

  const checkStartUp = () => next => action => {
    const { type } = action
    if (type === 'persist/REHYDRATE') {
      next(appIsReady())
    }
    next(action)
  }

  components.push(checkStartUp)
  components.push(sagaMiddleware)
  components.push(logger)
  const middleWare = applyMiddleware(...components)
  
  const store = createStore(reducers, middleWare)
  const persistedStore = persistStore(store, ( err, restoredState ) => {
    store.getState()
  })
  
  sagaMiddleware.run(SagaRoot)
  
  return persistedStore
}
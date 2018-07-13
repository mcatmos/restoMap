/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootStack from './App/Navigation/NavigationRouter'
import CreateStore from './App/Domain/Store/Store'
import Reducers from './App/Domain/Reducers/index'
import LoadingScreen from './App/Screens/Login/Screen/LoaderScreen'
import * as NavigationService from './App/Navigation/NavigationService'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.store = CreateStore(Reducers)
  }

  componentDidMount() {
    NavigationService.setNavigator(this.navigator)
  }

  render() {
    return (
      <Provider store={this.store.store}>
        <PersistGate loading={LoadingScreen} persistor={this.store.persistor}>
          <RootStack ref={nav => { this.navigator = nav }}/>
        </PersistGate>
      </Provider>
    )
  }
}
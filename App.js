/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import RootStack from './App/Navigation/NavigationRouter'
import CreateStore from './App/Domain/Store/Store'
import Reducers from './App/Domain/Reducers/index'
import AuthLoadingScreen from './App/Screens/Login/Screen/AuthLoadingScreen';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.store = CreateStore(Reducers)
  }

  render() {
    return (
      <Provider store={this.store}>
        <RootStack />
      </Provider>
    )
  }
}
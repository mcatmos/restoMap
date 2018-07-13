import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../Screens/Home/Screen/HomeScreen'
import DetailScreen from '../Screens/Detail/Screen/DetailScreen'
import LoginScreen from '../Screens/Login/Screen/LoginScreen'
import AuthLoadingScreen from '../Screens/Login/Screen/AuthLoadingScreen'

const CommonNavigatorStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: DetailScreen
  }
})

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
})

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: CommonNavigatorStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default RootStack


import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../Screens/Home/Screen/HomeScreen'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
})

export default RootStack


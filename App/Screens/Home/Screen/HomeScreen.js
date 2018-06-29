import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import Map from '../../../Components/Map/Map'
import ScrollItems from '../../../Components/ScrollItems/ScrollItems'

class HomeScreen extends Component {

  render() {
    return (
      <View>
        <Map />
        <ScrollItems />
      </View>
    )
  }
}

export default HomeScreen
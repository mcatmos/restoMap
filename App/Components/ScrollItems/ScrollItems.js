import React from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native'

const ScrollItems = () => {
  return(
    <ScrollView
      horizontal
    >
      <View><Text>Resto 1</Text></View>
      <View><Text>Resto 2</Text></View>
      <View><Text>Resto 3</Text></View>
    </ScrollView>
  )
}

export default ScrollItems
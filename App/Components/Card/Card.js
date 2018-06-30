import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5
  }
})

export default Card
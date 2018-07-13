import React, { Component } from 'react'
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet
} from 'react-native'

class LoadingScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="black" size="small" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoadingScreen
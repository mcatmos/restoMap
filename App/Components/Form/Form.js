import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import CategorySelector from './Components/CategorySelector'
const { width, height } = Dimensions.get('window')

class Form extends Component {
  handleOnPress = (id) => {
    console.log(id)
  }

  render() {
    return (
      <View style={styles.container}>
        <CategorySelector onPress={this.handleOnPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 300,
    height
  }
})

export default Form
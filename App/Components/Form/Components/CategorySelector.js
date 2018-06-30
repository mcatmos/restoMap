import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

const CategorySelector = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Text>Select a Category</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress('Restaurant')}>
        <Text>Restaurant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onPress('Pub')}>
        <Text>Pub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onPress('Cinema')}>
        <Text>Cinema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onPress('Teatro')}>
        <Text>Teatro</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30
  },
  button: {
    width: 250,
    padding: 15,
    backgroundColor: 'pink',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategorySelector
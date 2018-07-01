import React from 'react'
import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

const PredictiveBox = ({ item }) => {
  return (
    <TouchableOpacity style={styles.box}>
      <Text numberOfLines={1}>{item.description}</Text>
    </TouchableOpacity>
  )
}

const PredictiveList = ({ results }) => {
  console.log(results)
  return (
    <FlatList
      data={results}
      keyExtractor={this._keyExtractor}
      renderItem={({item}) => <PredictiveBox item={item}/> }
    />
  )
}

export default PredictiveList
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

const PredictiveBox = ({ item, onPress }) => {
  console.log(item)
  return (
    <TouchableOpacity style={styles.box} onPress={() => onPress(item.place_id)}>
      <Text numberOfLines={1}>{item.description}</Text>
    </TouchableOpacity>
  )
}

const PredictiveList = ({ results, onPress }) => {
  return (
    <FlatList
      data={results}
      keyExtractor={this._keyExtractor}
      renderItem={({item}) => <PredictiveBox item={item} onPress={onPress} /> }
    />
  )
}

export default PredictiveList
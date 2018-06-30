import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import AddItemButton from '../AddItemButton/AddItemButton'

const Card = ({ name, formatted_address, opening_hours, photos, rating, geometry, onPress }) => {
  const openNow = opening_hours.open_now ? `Yeah` : `Nope`
  const data = { name, formatted_address, opening_hours, photos, rating, geometry }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>{formatted_address}</Text>
      <Text>Open now: {openNow}</Text>
      <Text style={styles.title}>{rating}</Text>
      <View style={styles.addButton}>
        <AddItemButton onPress={() => onPress(data)}/>
      </View>
    </View>
  )
}

/*
 address
 name
 open now
 photos
 rating
*/
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 200,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    justifyContent: 'space-around'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10
  },
  addButton: {
    alignItems: 'flex-end'
  }
})

export default Card
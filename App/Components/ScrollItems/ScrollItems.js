import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Card from '../Card/Card'
const { width } = Dimensions.get('window')

class ScrollItems extends Component {

  renderRow = (item) => {
    return (
      <View style={{ backgroundColor: 'white', padding: 10, margin: 10 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.website}</Text>
        <Text>{item.formatted_address}</Text>
        <Text style={styles.title}>{item.rating}</Text>
      </View>
    )
  }

  render() {
    const { items, onPress, isFetching, animateToRegion } = this.props
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => this.renderRow(item)}
        sliderWidth={width}
        itemWidth={width - 100}
        firstItem={1}
        loop
        onBeforeSnapToItem={(index) => animateToRegion(items[index].geometry.location)}
      />
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10
  }
})

export default ScrollItems
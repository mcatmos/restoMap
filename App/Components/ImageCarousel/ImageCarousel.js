import React, { Component } from 'react'
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

class ImageCarousel extends Component {

  renderScrollItem = (item) => {
    return(
      <Image source={item.uri} />
    )
  }

  render() {
    const { images } = this.props
    return(
      <View>
        <ScrollView>
          {images.map(item => {
            return this.renderScrollItem(item)
          })}
        </ScrollView>
      </View>
    )
  }
}

export default ImageCarousel
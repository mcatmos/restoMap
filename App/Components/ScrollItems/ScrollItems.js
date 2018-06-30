import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native'
import Card from '../Card/Card'

class ScrollItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animatedValue: new Animated.Value(0)
    }
  }

  componentDidUpdate() {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }
  
  render() {
    const { items, onPress } = this.props
    return (
      <Animated.ScrollView 
        horizontal 
        style={{ opacity: this.state.animatedValue }}
      >
        {items.map((item, index) => {
          return (
            <Card key={index} {...item} onPress={onPress} />
          )
        })}
      </Animated.ScrollView>
    )
  }
}

export default ScrollItems
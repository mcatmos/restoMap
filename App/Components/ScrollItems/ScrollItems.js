import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Card from '../Card/Card'

class ScrollItems extends Component {
  render() {
    const { markers } = this.props
    return(
      <ScrollView
        horizontal
      >
      {markers.length && markers.map((value, index) => {
        return <Card {...value } />
      })}
        
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    markers: state.markers
  }
}

export default connect(mapStateToProps, null)(ScrollItems)
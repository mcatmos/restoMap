import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { config } from './DevMenuConfig'

class DevMenu extends Component {

  render() {
    const { dispatch } = this.props
    
    return (
      <View>
        {config(dispatch).map(item => {
          return (
            <TouchableOpacity key={item.label} onPress={item.onPress}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(null, mapDispatchToProps)(DevMenu)
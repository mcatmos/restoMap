import React from 'react'
import { View, Text } from 'react-native'

const CalloutView = ({ name, description }) => {
  return(
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default CalloutView
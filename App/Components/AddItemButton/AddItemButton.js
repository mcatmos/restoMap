import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const AddItemButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={'plus-circle'} size={40} />
    </TouchableOpacity>
  )
}

export default AddItemButton
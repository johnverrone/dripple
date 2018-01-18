import React from 'react'
import { View, Text, Platform } from 'react-native'

export default props => {
  const fontFamily = Platform.OS === 'ios' ? 'Courier' : 'monospace'

  return (
      <Text style={{fontFamily}} {...props}>{ props.children }</Text>
  )
}
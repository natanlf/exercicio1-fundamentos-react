import React from 'react'
import { View, Text } from 'react-native'

//colocando a View, podemos usar mais de um componente

export default props => 
<View>
  <Text> Arrow function 1: {props.texto}</Text>
  <Text> Arrow function 2: {props.texto}</Text>  
</View>

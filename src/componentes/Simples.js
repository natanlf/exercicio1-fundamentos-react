import React from 'react'
import { Text } from 'react-native'

//retornando mais de um componente com array

export default props => 
[
  <Text key={1}> Arrow function 1: {props.texto}</Text>,
  <Text key={2}> Arrow function 2: {props.texto}</Text>  
]

import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//estamos usando o estilo Padrao que importamos e como colocamos dentro de um array, podemos colocar vários estilos
//Com array [Padrao.ex], mas como não precisamos vamos tirar o array

export default props => <Text style={Padrao.ex}> Arrow function 1: {props.texto}</Text>


import React from 'react'
import { Text } from 'react-native'

//componente baseado em função, vamos importar esse componente no app.js
export default function(props) { //parametro que é enviado pelo App.js, assim vamos acessar as propriedades do componente App.js
    return <Text>{props.texto}</Text> //props é o nome do parametro que recebi mas o nome da propriedade que defini em app.js foi texto
}
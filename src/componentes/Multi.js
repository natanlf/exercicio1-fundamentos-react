import React from 'react'
import { Text }  from 'react-native'
import Padrao from '../estilo/Padrao'

//Quando usamos export sem o Default, somos obrigados a dar nome a função
//como é uma função anonima, armazenamos em uma constante
//temos uma arquivo com multiplas funções que são acessadas pelo arquivo principal
export const Reverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text> //retornamos o texto invertido
}

export const Show = props => {
    const inv = props.msg
    return <Text style={Padrao.ex}>{inv}</Text> //retornamos o texto invertido
}
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao';

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto }) //como o valor e key tem o mesmo nome, posso apenas colocar texto ao invés de texto: texto
    }
    //onChangeText evento que sempre que há uma mudança no texto, ele é acionado para atualizar o estado do componente
    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto}/>
            </View>
        )
    }
}
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'

//esse componente está sendo usado dentro do index.js, por isso precisamos exportar
export default class App extends Component {

  //reder() é a função responsável por renderizar a tela
  render(){ //Simples é o nome do componente que criamos e foi chamado dentro de View
    return (
      <View style={styles.container}>
        <Simples/>
      </View>
    )
  }
}

//serve para colocarmos estilos nos componentes
const styles = StyleSheet.create({ //objeto com todos os estilos 
  container: { //chamei a chave de container e o valor é o objeto que vem em seguida
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Reverter, Show } from './componentes/Multi' //arquivo com multiplas funções, se usasse default não poderia ter multiplas e não usaria {}
import Contador from './componentes/Contador';
import ValidarProps from './componentes/ValidarProps';

//esse componente está sendo usado dentro do index.js, por isso precisamos exportar
export default class App extends Component {

  //reder() é a função responsável por renderizar a tela
  render(){ //Simples é o nome do componente que criamos e foi chamado dentro de View
    return ( //observe que passamos uma propriedade chamada texto com o valor 'Flexível!'
      <View style={styles.container}>
        <Simples texto='Flexível!'/>
        <ParImpar numero={5} />
        <Reverter texto='React'/>
        <Show msg="hello"/>
        <Contador numeroInicial={8}/>
        <ValidarProps ano={19}></ValidarProps>
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
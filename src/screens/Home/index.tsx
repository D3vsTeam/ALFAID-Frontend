import React from 'react';
import { View,TouchableOpacity, Image, Text } from 'react-native';
import { Header, HeaderTudo } from './styles';
// import { Container } from './styles';

export const Home = () => {
  return (
    <HeaderTudo style={{flex: 1}}>
      <Header>
        <Image style={{height: 100, width: 100}} source={require('../../../assets/alfaEng.png')}/>
        <Text>Test</Text>
      </Header>
      <View>
        <Text>Menu</Text>

        <TouchableOpacity>
          <Text>TESTE 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>TESTE 1</Text>
        </TouchableOpacity>


      </View>
    </HeaderTudo>
  )
}

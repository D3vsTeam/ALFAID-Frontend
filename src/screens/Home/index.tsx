import React from 'react';
import { View,TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
import { Header, HeaderAll } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../hook/useAuth';

export const Home = () => {
  const {signOut} = useAuth()
  //signOut()
  return (
    <HeaderAll style={{flex: 1}}>
      <Header>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Image style={{height: 100, width: 100,marginTop: 30}} source={require('../../../assets/alfaEng.png')}/>
        <View style={{alignItems: 'center'}}>
          <Text style={styled.textHeader}>Bem Vindo!</Text>
          <Text style={styled.textHeader}>Joao</Text>
        </View>
      </Header>
      <Text style={{textAlign: 'center'}}>Menu</Text>
      <View style={styled.viewBotoes}>

        <TouchableOpacity style={styled.botoes}>
          <View style={{backgroundColor: '#263894',borderRadius: 10,padding: 20}}>
            <Ionicons name="documents-outline" size={50} color="white" />
          </View>
          <View style={{justifyContent: 'center',marginLeft: 10}}>
            <Text style={styled.textbtn}>Documento RDC</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styled.botoes} >
        <View style={{backgroundColor: '#263894',borderRadius: 10,padding: 20}}>
            <Ionicons name="documents-sharp" size={50} color="white" />
          </View>
          <View style={{justifyContent: 'center',marginLeft: 10}}>
            <Text style={styled.textbtn}>Documento RDC</Text>
          </View>
        </TouchableOpacity>
      </View>
    </HeaderAll>
  )
}

const styled = StyleSheet.create({
  botoes:{
    height: 110,
    width: 300,
    borderWidth: 0.2,
    borderRadius: 30,
    padding: 0,
    flexDirection: 'row',
  },
  textHeader:{
    color:'white',
    marginRight: 20,
    fontSize:30  
    
  },


  viewBotoes:{
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20
  },
  textbtn:{
    fontSize: 18,
    fontWeight: 'bold'
  }
})
import React,{useState} from 'react';
import { View,TouchableOpacity, Image, Text,StyleSheet, Alert } from 'react-native';
import { Header, HeaderAll, CustomBotoes,TextNome,TextTitulo,TextBtn,ViewButtons } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../hook/useAuth';

export const Home = () => {
  const {signOut} = useAuth()
  //signOut()
  return (
    <HeaderAll style={{flex: 1}}>
      <Header>
        <TouchableOpacity onPress={() => Alert.alert('Deseja Sair ?','',[
            {
              text: 'Sim',
              onPress: () => signOut(),
            },
            {
              text: 'Nao',
            },
          ])
        }>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Image style={{height: 100, width: 100,marginTop: 30}} source={require('../../../assets/alfaEng.png')}/>
        <View style={{alignItems: 'center'}}>
          <TextTitulo>Bem Vindo!</TextTitulo>
          <TextNome>Joao</TextNome>
        </View>
      </Header>
      <Text style={{textAlign: 'center'}}>Menu</Text>

      <ViewButtons>
        <CustomBotoes>
          <View style={{backgroundColor: '#263894',borderRadius: 10,padding: 20}}>
            <Ionicons name="documents-outline" size={50} color="white" />
          </View>
          <View style={{justifyContent: 'center',marginLeft: 10}}>
            <TextBtn>Documento RDC</TextBtn>
          </View>
        </CustomBotoes>

        <CustomBotoes>
          <View style={{backgroundColor: '#263894',borderRadius: 10,padding: 20}}>
            <Ionicons name="documents-sharp" size={50} color="white" />
          </View>
          <View style={{justifyContent: 'center',marginLeft: 10}}>
            <TextBtn>Documento RDC</TextBtn>
          </View>
        </CustomBotoes>

      </ViewButtons>
    </HeaderAll>
  )
}

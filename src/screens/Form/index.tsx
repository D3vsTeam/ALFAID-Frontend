import React,{useState, useEffect } from 'react';
import { View,Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Container } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/useAuth';
import { Example } from '../../components/ListFunc';
import { FlatList } from 'native-base';
import { AddAtividades } from '../../components/AtividadesList';
import { Equipe } from '../../models/Equipe';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Form = () => {
  const { funcionario } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState();


  const instState = [{
    title: "Code",
    isCompleted: true
  }, {
    title: "Meeting with team at 9",
    isCompleted: false
  }, {
    title: "Check Emails",
    isCompleted: false
  }, {
    title: "Write an article",
    isCompleted: false
  }];
  //const navigation = useNavigation()
  //const teste = () => {
    //navigation.navigate('Home')
  //}
  return (
    <Container>
      <View>
       <Example/>

        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>

        </View>
        <AddAtividades/>

      </View>
    </Container>
  )
}

const styled = StyleSheet.create({
  textTitle:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  }
})


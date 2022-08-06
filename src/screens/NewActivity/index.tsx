import React,{useState, useEffect} from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { ViewNewAct, BtnSalvar} from "./style";
import {Rating, PickImage, MembrosActivity } from '../../components'
import { Funcionario } from "../../models/Funcionario";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NewActivity = () => {
  const [equipes, setEquipes] = useState<Funcionario[]>([]);


  useEffect(() => {
    (async () => {
      const equipes = await AsyncStorage.getItem("@AlfaID:equipes");
      console.log(equipes)
      if (equipes) {
        setEquipes(JSON.parse(equipes))
      }
    })()
  }, [])
    return(
        <ViewNewAct >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styled.textTitle}>Audio</Text>
            <View style={{backgroundColor: 'lightgray',borderRadius: 5,padding: 10}}>
            <TextInput textAlignVertical='top' multiline={true} numberOfLines={5} placeholder='Audio...' />
            </View>

            <PickImage/>

            <Text style={styled.textTitle}>Avaliação</Text>
            <Rating/>

            <Text style={styled.textTitle}>Funcionários</Text>
            <MembrosActivity/>

            <BtnSalvar>
              <Text style={{color: 'white', textAlign:'center'}}>Salvar</Text>
            </BtnSalvar>
            </ScrollView>
        </ViewNewAct>
    )
}

const styled = StyleSheet.create({
  textTitle:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  }
})
import React,{useState, useEffect} from "react";
import { View,Text,Button,TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { ViewNewAct, BtnSalvar} from "./style";
import { Rating } from "../../components/Rating";
import { MembrosActivity } from "../../components/MembrosActivity";
import { PickImage } from "../../components/PickImage";
import { Funcionario } from "../../models/Funcionario";
import { RBC } from "../../models/RBC";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NewActivity = () => {
  const [equipes, setEquipes] = useState<Funcionario[]>([]);
  const [rbc, setRbc] = useState<RBC>(new RBC());

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
            <View style={{backgroundColor: 'gray'}}>
            <TextInput textAlignVertical='top' multiline={true} numberOfLines={5} placeholder='Audio...' />
            </View>

            <PickImage/>

            <Text style={styled.textTitle}>Avaliação</Text>
            <Rating/>

            <MembrosActivity item={rbc.equipes}/>

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
    fontWeight: 'bold'
  }
})
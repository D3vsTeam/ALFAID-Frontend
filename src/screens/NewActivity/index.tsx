import React,{useState} from "react";
import { View,Text,Button,TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { ViewNewAct, BtnSalvar} from "./style";
import { Rating } from "../../components/Rating";
import { MembrosActivity } from "../../components/MembrosActivity";
import { PickImage } from "../../components/PickImage";


export const NewActivity = () => {


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
    fontWeight: 'bold'
  }
})
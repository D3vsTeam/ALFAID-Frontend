import React,{useState, useEffect } from 'react';
import { View,Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Container } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Form = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  //const navigation = useNavigation()
  //const teste = () => {
    //navigation.navigate('Home')
  //}
  return (
    <Container>
      <View>
        <Text style={styled.textTitle}>Dados</Text>
        <Picker
         selectedValue={selectedLanguage}
         onValueChange={(itemValue, itemIndex) =>
           setSelectedLanguage(itemValue)
         }
        >
            <Picker.Item label="Equipe1" value="java" />
            <Picker.Item label="Equipe2" value="js" />
        </Picker>

        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styled.textTitle}>Atividades</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
        </View>


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


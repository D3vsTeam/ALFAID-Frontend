import React,{useState, useEffect } from 'react';
import { View,Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Container } from './styles';
import * as ImagePicker from 'expo-image-picker';

export const Form = () => {
  const [image, setImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState();


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const teste = async () => {
    setImage(null)
  }

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
        <Text style={styled.textTitle}>Audio</Text>
        <View style={{backgroundColor: 'gray'}}>
          <TextInput textAlignVertical='top' multiline={true} numberOfLines={5} placeholder='Audio...' />
        </View>

        <Text style={styled.textTitle}>Imagens</Text>      
        <View style={{alignItems: 'center',justifyContent:'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Button title="Carregar Imagem" onPress={pickImage} />
            <Button title="Deletar" onPress={teste}/>
          </View>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
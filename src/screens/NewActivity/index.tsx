import React,{useState} from "react";
import { View,Text,Button,TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { ViewNewAct, BtnSalvar} from "./style";

export const NewActivity = () => {
    const [image, setImage] = useState<String>();
  
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
    const deleteImage = async () => {
      setImage()
    }
    return(
        <ViewNewAct >
            <Text style={styled.textTitle}>Audio</Text>
            <View style={{backgroundColor: 'gray'}}>
            <TextInput textAlignVertical='top' multiline={true} numberOfLines={5} placeholder='Audio...' />
            </View>

            <Text style={styled.textTitle}>Imagens</Text>      
            <View style={{alignItems: 'center',justifyContent:'center'}}>
            <View style={{flexDirection: 'row'}}>
                <Button title="Carregar Imagem" onPress={pickImage} />
                <Button title="Deletar" onPress={deleteImage}/>
            </View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <BtnSalvar>
              <Text style={{color: 'white', textAlign:'center'}}>Salvar</Text>
            </BtnSalvar>
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
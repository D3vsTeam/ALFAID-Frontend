import React,{useState} from "react";
import { View, Text,Image, StyleSheet } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { CustomButton } from "./style";
export const PickImage = () => {

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
        <View>
            <Text style={styled.textTitle}>Imagens</Text>      
            <View style={{alignItems: 'center',justifyContent:'center'}}>
            <View style={{flexDirection: 'row'}}>
                <CustomButton onPress={pickImage}>
                  <Text style={{color:'white'}}> Carregar Imagem</Text>
                </CustomButton>
                <CustomButton onPress={deleteImage}>
                  <Text style={{color:'white'}}> Deletar Imagem</Text>
                </CustomButton>
            </View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    textTitle:{
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold'
    }
  })
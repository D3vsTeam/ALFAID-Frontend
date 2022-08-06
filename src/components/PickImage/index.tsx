import React,{useState} from "react";
import { View, Text,Image, StyleSheet } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { CustomButton } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const deleteImage = async () => {
        setImage()
      }
    return(
        <View style={{justifyContent: 'center',alignItems: 'center', padding: 10}}>
            <Text style={styled.textTitle}>Imagens</Text>    
            {image === undefined ? <MaterialCommunityIcons name="file-image-plus" size={110} style={{opacity:0.2}} color="gray" /> : null}  
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300,marginTop: 10 }} />}
            <View style={{alignItems: 'center',justifyContent:'center'}}>
              <View style={{flexDirection: 'row'}}>
                  <CustomButton onPress={pickImage}>
                    <Text style={{color:'white', fontWeight:'bold'}}> Carregar Imagem</Text>
                  </CustomButton>
                  <CustomButton onPress={deleteImage}>
                    <Text style={{color:'white',fontWeight:'bold'}}> Deletar Imagem</Text>
                  </CustomButton>
              </View>
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
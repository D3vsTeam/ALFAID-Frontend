import React from "react";
import { View, TextInput, Text ,StyleSheet, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export const MenuTarefas = ( ) => {
    const navigation = useNavigation()
    return(
        <View style={styled.ViewMenu}>
            <Text style={styled.textTitle}>Observações</Text>
            <View style={{backgroundColor: 'lightgray',borderRadius: 5,padding: 10}}>
            <TextInput textAlignVertical='top' multiline={true} numberOfLines={5} placeholder='Observação...' />
            </View>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styled.buttons} onPress={()=> navigation.navigate('PageImg')}>
                    <Feather name="image" size={24} color="black" />
                    <Text>Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styled.buttons} onPress={()=> navigation.navigate('PageFunc')}>
                    <Ionicons name="people" size={24} color="black" />
                    <Text>Funcionarios</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styled.buttons} onPress={()=> navigation.navigate('PageAvaliacao')}>
                    <Feather name="star" size={24} color="black" />
                    <Text>Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styled.buttons} onPress={()=> navigation.navigate('PageFunc')}>
                    <Ionicons name="people" size={24} color="black" />
                    <Text>Funcionarios</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styled = StyleSheet.create({
    textTitle:{
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold',
    },
    ViewMenu:{
        flex:1,
        padding: 20
    },
    buttons:{
        padding: 10,
        height: 100,
        width: 110,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 20
    }
  })
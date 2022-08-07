import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextArea, Button, Text } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
export const PageCondicoes = () => {
    const navigation = useNavigation();
    const handleSave = () => {
        navigation.goBack()
      }
    return(
        <View style={styled.Container}>
        <TextArea
          autoCompleteType={"off"}
          backgroundColor={"gray.50"}
          borderColor={"gray.300"}
          numberOfLines={10}
          p={4}
          fontSize={14}
          borderRadius={8}
          size="4x1"
          w={"full"}
          placeholder="Digte as condições enfrentadas..."
        />
            <Button
            onPress={handleSave}
            size={"lg"}
            p={4}
            mt={10}
            borderRadius={8}
            colorScheme="success"
            rightIcon={
              <Ionicons
                name="checkmark-circle-outline"
                size={25}
                color="white"
              />
            }>
            <Text
              bold
              fontSize={"xl"}
              mr={2}
              color="white">
              Salvar
            </Text>
          </Button>
        </View>
    )
}


const styled = StyleSheet.create({
    Container:{
        padding: 20
    },
    Input:{
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 10
    }
})
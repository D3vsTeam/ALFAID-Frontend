import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Tarefa } from "../../models/Tarefa";
import { useRbc } from "../../hook/useRbc";
import { Box, FormControl, HStack, Input, InputGroup, TextArea, VStack, Pressable, Text, Heading, Icon } from "native-base";


export const MenuTarefas = ({ }) => {
  const { rbc } = useRbc();
  const navigation = useNavigation();
  const route = useRoute();
  const { tarefa } = route.params as { tarefa: Tarefa }

  const mainProps = {
    w: 150,
    h: 150,
    background: "gray.50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray.300",
    shadow: "1",
  }

  return (
    <Box p={3}>
      <FormControl.Label fontSize={"xl"}>Tarefa Realizada</FormControl.Label>
      <TextArea
        p={4}
        autoCompleteType=""
        fontSize={"xl"}
        borderRadius={8}
        size="4xl"
        w={"full"}
        placeholder="Digte aqui a tarefa realizada..."
      />
      <Heading my={4}>Opções</Heading>
      <VStack w={"full"} space={8} >
        <HStack space={8} justifyContent="center">
          <Pressable
            {...mainProps}
            onPress={() => navigation.navigate('PageImg')}
          >
            <Ionicons name="image" size={30} color="rgba(0,0,0,.5)" />
            <Text bold mt={3} fontSize={"xl"}>Imagem</Text>
          </Pressable>
          <Pressable
            {...mainProps}
            onPress={() => navigation.navigate('PageFunc')}
          >
            <Ionicons name="md-people" size={30} color="rgba(0,0,0,.5)" />
            <Text bold mt={3} fontSize={"xl"}>Equipe</Text>
          </Pressable>
        </HStack>
        <HStack space={8} justifyContent="center">
          <Pressable
            {...mainProps}
            onPress={() => navigation.navigate('PageAvaliacao')}
          >
            <Ionicons name="star" size={30} color="rgba(0,0,0,.5)" />
            <Text bold mt={3} fontSize={"xl"}>Avaliação</Text>
          </Pressable>
          <Pressable
            {...mainProps}
          //onPress={() => navigation.navigate('PageFunc')}
          >
            <Ionicons name="alert-circle" size={30} color="rgba(0,0,0,.5)" />
            <Text bold mt={3} fontSize={"xl"}>Condições</Text>
          </Pressable>
        </HStack>
        <HStack space={8} justifyContent="center">
          <Pressable
            {...mainProps}
          onPress={() => navigation.navigate('PageProdutos')}
          >
            <Ionicons name="cube" size={30} color="rgba(0,0,0,.5)" />
            <Text bold mt={3} fontSize={"xl"}>Produto</Text>
          </Pressable>
          <Pressable
            {...mainProps}
          //onPress={() => navigation.navigate('PageFunc')}
          >
            <Ionicons name="navigate" size={30} color="rgba(0,0,0,.5)" />
            <Text bold mt={3} fontSize={"xl"}>Localização</Text>
          </Pressable>
        </HStack>
      </VStack>

      {/*       <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styled.buttons} onPress={() => navigation.navigate('PageImg')}>
          <Feather name="image" size={24} color="rgba(0,0,0,.5)" />
          <Text>Imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styled.buttons} onPress={() => navigation.navigate('PageFunc')}>
          <Ionicons name="people" size={24} color="rgba(0,0,0,.5)" />
          <Text>Funcionarios</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styled.buttons} onPress={() => navigation.navigate('PageAvaliacao')}>
          <Feather name="star" size={24} color="rgba(0,0,0,.5)" />
          <Text>Imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styled.buttons} onPress={() => navigation.navigate('PageFunc')}>
          <Ionicons name="people" size={24} color="rgba(0,0,0,.5)" />
          <Text>Funcionarios</Text>
        </TouchableOpacity>
      </View> */}

    </Box>
  )
}

const styled = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  ViewMenu: {
    flex: 1,
    padding: 20
  },
  buttons: {
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
import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Tarefa } from "../../models/Tarefa";
import { useRbc } from "../../hook/useRbc";
import { Box, FormControl, HStack, Input, InputGroup, TextArea, VStack, Pressable, Text, Heading, Icon, ScrollView, Button, Spacer } from "native-base";


export const MenuTarefas = ({ }) => {
  const { rbc, setRbc } = useRbc();
  const navigation = useNavigation();
  const route = useRoute();
  const { tarefa } = route.params as { tarefa: Tarefa }

  useEffect(() => {
    if (!tarefa) {
      setRbc(prev => {
        prev.tarefa.push(new Tarefa())
        return prev;
      })
    } else {
      
    }
  }, [])

  const mainProps = {
    w: 170,
    h: 130,
    background: "gray.50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray.300",
    shadow: "1",
  }

  return (
    <ScrollView p={3}>
      <Heading my={4}>Tarefa Realizada</Heading>
      <TextArea
        backgroundColor={"gray.50"}
        borderColor={"gray.300"}
        p={4}
        //autoCompleteType="s"
        fontSize={"xl"}
        borderRadius={8}
        size="4xl"
        w={"full"}
        placeholder="Digte aqui a tarefa realizada..."
      />
      <Heading my={4}>Opções</Heading>
      <VStack w={"full"} space={5} >
        <HStack space={5} justifyContent="center">
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
        <HStack space={5} justifyContent="center">
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
        <HStack space={5} justifyContent="center">
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
        <Button
          size={"lg"}
          p={4}
          borderRadius={8}
          colorScheme="success"
          rightIcon={
            <Ionicons name="checkmark-circle-outline" size={25} color="white" />
          }>
          <Text bold fontSize={"xl"} mr={2} color="white">Salvar</Text>
        </Button>
      </VStack>
    </ScrollView>
  )
}
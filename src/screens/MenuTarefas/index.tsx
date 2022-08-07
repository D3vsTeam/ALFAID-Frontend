import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Heading, HStack, Pressable, ScrollView, Text, TextArea, VStack } from "native-base";
import { useEffect, useState } from "react";
import { TarefaContext } from "../../context/tarefa";
import { useRbc } from "../../hook/useRbc";
import { useTarefa } from '../../hook/useTarefa';
import { Tarefa } from "../../models/Tarefa";


export const MenuTarefas = () => {
  const { rbc, insertTarefa } = useRbc();
  const navigation = useNavigation();
  const route = useRoute();
  const { tarefa, updateTarefa } = useTarefa();

  const mainProps = {
    w: 170,
    h: 125,
    background: "gray.50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray.300",
    shadow: "1",
  }

  const handleSave = () => {
    insertTarefa(tarefa)

    navigation.navigate("Tasks")
  }

  return (
    <ScrollView p={3}>
      <Heading my={4}>Tarefa Realizada</Heading>
      <TextArea
        onChangeText={(value) => updateTarefa({ ...tarefa, descricao: value })}
        value={tarefa?.descricao}
        autoCompleteType={"off"}
        backgroundColor={"gray.50"}
        borderColor={"gray.300"}
        p={4}
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
            onPress={() => navigation.navigate('PageCondicoes')}
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
          onPress={handleSave}
          size={"lg"}
          p={4}
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
      </VStack>
    </ScrollView>
  )
}
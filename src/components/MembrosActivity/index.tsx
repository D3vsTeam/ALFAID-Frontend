import React, { useState, useEffect } from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { Equipe } from "../../models/Equipe";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native";
import { useRbc } from "../../hook/useRbc";

export const MembrosActivity = () => {
  const instState = [{
    title: "Code",
    isCompleted: true
  }, {
    title: "Meeting with team at 9",
    isCompleted: false
  }, {
    title: "Check Emails",
    isCompleted: false
  }, {
    title: "Write an article",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();
  const { rbc } = useRbc()
  const [equipes, setEquipes] = useState<Equipe[]>([]);

  useEffect(() => {
    (async () => {
      const equipes = await AsyncStorage.getItem("@AlfaID:equipes");
      console.log(equipes)
      if (equipes) {
        console.log('testeT')
        setEquipes(JSON.parse(equipes))
      }
    })()
  }, [])
  console.log(rbc.equipes)
  const handleStatusChange = index => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };



  return <Center w="100%">
    <Box maxW="500" w="100%">
      <Heading mb="2" size="md">
        Funcionários
      </Heading>
      <VStack space={4}>
        <HStack space={2}>
          <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
          <IconButton borderRadius="sm" variant="solid" icon={<Feather name="search" size={24} color="white" />} onPress={() => {
            setInputValue("");
          }} />
        </HStack>
        <VStack space={2}>
          {rbc?.equipes.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.nome + itemI.toString()}>
            <Checkbox  onChange={() => handleStatusChange(itemI)} value={item.nome}>
              {item.nome}
            </Checkbox>
          </HStack>)}
        </VStack>
      </VStack>
    </Box>
  </Center>;
};
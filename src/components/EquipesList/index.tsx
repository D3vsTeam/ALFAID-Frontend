import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center, Checkbox, Fab, HStack, Input, useToast, VStack } from "native-base";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { Funcionario } from "../../models/Funcionario";
import { useRbc } from '../../hook/useRbc';


export const EquipesList = () => {
  const toast = useToast();
  const [inputValue, setInputValue] = React.useState("");
  const [equipes, setEquipes] = useState<Funcionario[]>([]);
  const {rbc,setRbc} = useRbc()
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const equipes = await AsyncStorage.getItem("@AlfaID:equipes");
      if (equipes) {
        setEquipes(JSON.parse(equipes))
      }
    })()
  }, [])

  const handleAddFuncionario = (isSelected: boolean, funcionario: Funcionario) => {
    setRbc(prev => {
      if (isSelected) {
        prev.equipes.push(funcionario)
      } else {
        let index = prev.equipes.findIndex(f => f === funcionario);
        prev.equipes.splice(index, 1)
      }
      return prev;
    })
  }

  const filteredList = equipes
    ? equipes.filter(func => func.nome.startsWith(inputValue))
    : [];

  const handleNext = () => {
    if (rbc.equipes.length > 0) {
      navigation.navigate('Tasks')
    } else {
      toast.show({
        description: "Selecione pelo menos um funcionario"
      })
    }
  }

  return (
    <>
      <Center w="full" >
        <VStack space={8} w={"full"}>
          <Input
            onChangeText={v => setInputValue(v)}
            value={inputValue}
            placeholder="Pesquisar"
          />
          {filteredList && (
            <VStack space={10}>
              {filteredList.map((funcionario, i) => (
                <HStack
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                  key={funcionario.nome + i.toString()}
                >
                  <Checkbox
                    onChange={(isSelected) => handleAddFuncionario(isSelected, funcionario)}
                    value={funcionario.nome}
                    size="lg"
                    colorScheme="info"
                  >
                    {funcionario.nome}
                  </Checkbox>

                </HStack>
              ))}
            </VStack>
          )}
        </VStack>
      </Center>
      <Fab
        justifyContent='flex-end'
        alignItems='flex-end'
        bottom={5}
        onPress={handleNext}
        renderInPortal={false}
        shadow={1}
        colorScheme="success"
        placement="bottom-right"
        label={"Avançar"}
        rightIcon={<Ionicons name="arrow-forward" size={20} color="white" />}
      />
    </>
  );
};
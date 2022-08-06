import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center, Checkbox, Fab, HStack, Input, useToast, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Funcionario } from "../../models/Funcionario";
import { RBC } from "../../models/RBC";

export const EquipesList = () => {
  const toast = useToast();
  const [inputValue, setInputValue] = React.useState("");
  const [equipes, setEquipes] = useState<Funcionario[]>([]);
  const [rbc, setRbc] = useState<RBC>(new RBC());


  useEffect(() => {
    (async () => {
      const equipes = await AsyncStorage.getItem("@AlfaID:equipes");
      console.log(equipes)
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
      
    } else {
      toast.show({
        description: "Selecione pelo menos um funcionario"
      })
    }
  }

  return (
    <>
      <Center w="full">
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
        onPress={handleNext}
        renderInPortal={true}
        shadow={1}
        colorScheme="success"
        placement="bottom-right"
        label={"Avançar"}
        rightIcon={<Ionicons name="arrow-forward" size={20} color="white" />}
      />
    </>
  );
};
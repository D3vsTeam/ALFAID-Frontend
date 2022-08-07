import { Center, Checkbox, HStack, Input, VStack } from "native-base";
import React, { useState } from "react";
import { useRbc } from "../../hook/useRbc";
import { useTarefa } from "../../hook/useTarefa";
import { Equipe } from "../../models/Equipe";
import { Funcionario } from "../../models/Funcionario";

export const MembrosActivity = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { rbc, setRbc } = useRbc()
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const { tarefa, setTarefa } = useTarefa();

  const filteredList = equipes
    ? rbc.equipes.filter(func => func.nome.startsWith(inputValue))
    : [];

  const handleAddFuncionario = (isSelected: boolean, funcionario: Funcionario) => {
    setTarefa(prev => {
      if (isSelected) {
        prev.equipes.push(funcionario)
      } else {
        let index = prev.equipes.findIndex(f => f === funcionario);
        prev.equipes.splice(index, 1)
      }
      return prev;
    })
  }

  return <Center w="full">
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
};
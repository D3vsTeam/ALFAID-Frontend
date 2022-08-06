import React, { useState, useEffect } from "react";
import { Input, Checkbox, VStack, HStack, Center, useToast } from "native-base";
import { Equipe } from "../../models/Equipe";
import { useRbc } from "../../hook/useRbc";
import { Funcionario } from "../../models/Funcionario";

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
  const { rbc,setRbc } = useRbc()
  const [equipes, setEquipes] = useState<Equipe[]>([]);


  const filteredList = equipes
    ? rbc.equipes.filter(func => func.nome.startsWith(inputValue))
    : [];

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
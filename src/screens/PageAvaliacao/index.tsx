
import React from "react";
import { Slider, Stack, Text, Box, Center, Heading, InputGroup, Button } from "native-base";
import { useTarefa } from "../../hook/useTarefa";
import InputText from "../../components/InputText";
import { Ionicons } from '@expo/vector-icons';


export const PageAvaliacao = () => {
  const { tarefa, updateTarefa } = useTarefa();
  const [nota, setNota] = React.useState(tarefa.avaliacao || 0);

  const handleNota = (number) => {
    if (nota+number >= 0 && nota+number <= 5) {
      setNota(nota+number)
      tarefa.avaliacao = nota+number
      updateTarefa(tarefa)
    }
  }

  return (
    <Center m={5} flex={1}>
      <Heading>Nota</Heading>

      <InputGroup mt={15}>
        <Button
          colorScheme="error"
          borderRadius={8}
          onPress={() => handleNota(-1)}
          px={5}
          leftIcon={
            <Ionicons name="remove" size={45} color="white" />
          }
        />
        <Text
          w={100}
          display="flex"
          justifyItems={"center"}
          textAlign="center"
          fontSize={"7xl"}
          borderWidth={1}
          borderColor={"gray.200"}
        >
          {nota}
        </Text>
        <Button
          px={5}
          colorScheme="success"
          borderRadius={8}
          onPress={() => handleNota(1)}
          leftIcon={
            <Ionicons name="add" size={45} color="white" />
          }
        />
      </InputGroup>
    </Center>
  );
};

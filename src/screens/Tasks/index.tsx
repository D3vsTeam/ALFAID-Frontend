import { useNavigation } from "@react-navigation/native";
import { AddIcon, Box, Fab, FlatList, Heading, HStack, Pressable, Spacer, Text, VStack } from "native-base";
import React from "react";
import { View } from "react-native";
import { AddAtividades } from '../../components'
import { useRbc } from "../../hook/useRbc";
import { Tarefa } from "../../models/Tarefa";

export const Tasks = ({ route, navigation }) => {
  const { rbc } = useRbc();
  const navigate  = useNavigation();

  const handleOpenTaskForm = (tarefa?: Tarefa) => {
    navigate.navigate("MenuTarefas", {tarefa})
  }

  return (
    <>
      <Box p={6}>
        <FlatList
          data={rbc.tarefa}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleOpenTaskForm(item)}
              mt={2}
              p={4}
              borderRadius={6}
              borderWidth={1}
              bgColor={item.completa ? "success.50" : "warning.50"}
              borderColor={item.completa ? "success.200" : "warning.200"}
            >
              <HStack space={2} justifyContent="space-between" >
                <VStack>
                  <Text fontSize={"lg"} bold>
                    {item.descricao}
                  </Text>
                  <Text>
                    Equipe de: {item.equipes.length} pessoas.
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Pressable>
          )}
          keyExtractor={item => item.descricao}
        />
      </Box>
      <Fab
        bottom={30}
        right={30}
        onPress={() => handleOpenTaskForm()}
        renderInPortal={false}
        shadow={1}
        colorScheme="darkBlue"
        placement="bottom-right"
        rightIcon={<AddIcon color="white" size={35} />}
      />
    </>
  )
}
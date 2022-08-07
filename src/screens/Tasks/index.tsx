import { useNavigation } from "@react-navigation/native";
import { AddIcon, Box, Fab, FlatList, Heading, HStack, Pressable, Spacer, Text, VStack } from "native-base";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { AddAtividades } from '../../components'
import { RbcContext } from "../../context/rbc";
import { useRbc } from "../../hook/useRbc";
import { useTarefa } from "../../hook/useTarefa";
import { Tarefa } from "../../models/Tarefa";

export const Tasks = () => {
  //const { rbc } = useRbc();
  const { } = useTarefa();
  const { updateTarefa } = useTarefa();
  const navigate = useNavigation();

  const handleOpenTaskForm = (tarefa?: Tarefa) => {
    if (tarefa) {
      updateTarefa(tarefa)
    } else {
      updateTarefa(new Tarefa())
    }

    navigate.navigate("MenuTarefas")
  }

  return (
    <>
      <Box p={6}>
        <RbcContext.Consumer>
          {({ rbc }) => (
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
          )}
        </RbcContext.Consumer>
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
import { AlertDialog, Box, Button, Flex, Text } from 'native-base';
import React, { useState } from 'react';
import { useAuth } from '../../hook/useAuth';
import { Ionicons } from '@expo/vector-icons';

export const FuncionarioCard: React.FC = () => {
  const { funcionario, signOut } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const cancelRef = React.useRef(null);

  const handlePress = () => {
    signOut()
  }

  const hideDialog = () => setOpenDialog(false)

  return (
    <>
      <Box
        p={4}
        borderWidth={1}
        borderColor={"gray.200"}
        bg={"white"}
        my={4}
        borderRadius={8}
      >
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Box mr={4} p={3} borderRadius="full" bgColor={'gray.100'}>
            <Ionicons ios="ios-person" name="person" size={16} color="black"/>
          </Box>
          <Flex
            flex={1}
          >
            <Text
              bold
              fontSize={14}
              mb={1}
            >
              {funcionario?.nome}
            </Text>
            <Text fontSize={12} opacity={70}>{funcionario?.funcoes.descricao}</Text>
          </Flex>
          <Button
            variant={"ghost"}
            onPress={handlePress}
            colorScheme={"error"}
            leftIcon={<Ionicons ios="ios-log-in" name="md-log-in" size={16} />}
          >
            <Text ml={2}>Sair</Text>
          </Button>
        </Flex>
      </Box>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={openDialog} onClose={hideDialog}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Sair</AlertDialog.Header>
          <AlertDialog.Body>
            Tem certeza que deseja sair? Apos sair não será mais possivel acessar o aplicativo sem conexão!
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={hideDialog} ref={cancelRef}>
                Cancelar
              </Button>
              <Button colorScheme="danger" onPress={handlePress}>
                Sim, quero sair.
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
}

export default FuncionarioCard;
import React, { useState } from "react";
import { Container, LogoImage, Title } from './styles';
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.png'
import { Box, Button, Flex, FormControl, Heading, Icon, Image, Input, InputGroup, KeyboardAvoidingView, NativeBaseProvider, ScrollView, Text, View, VStack } from "native-base";
import { useAuth } from "../../hook/useAuth";
import { Funcionario } from "../../models/Funcionario";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, TouchableWithoutFeedback } from "react-native";


const Auth: React.FC = () => {
  const { signIn } = useAuth();
  const [values, setValues] = useState<Funcionario>(new Funcionario());
  const [show, setShow] = React.useState(false);

  const handleLogin = () => {
    signIn(values)
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View flex={1}>
        <View flex={1}>
          <Image
            flex={1}
            w={null}
            marginTop={-500}
            source={bg}
          />
        </View>
        <Heading>
          Entrar
        </Heading>
        <Box
          bgColor={"white"}
          position={"absolute"}
          bottom={0}
          left={0}
          right={0}
          paddingY={30}
          paddingX={10}
          borderTopRadius={8}
        >
          <VStack space={4}>
            <InputGroup flexDirection={"column"}>
              <FormControl.Label>CPF</FormControl.Label>
              <Input
                size="md"
                w={"full"}
                InputLeftElement={
                  <Icon as={<AntDesign Cpf="user" />} size={5} ml="2" color="muted.400" />} placeholder="Nome..."
                onChangeText={(text: string) => setValues({ ...values, cpf: text })}
              />
            </InputGroup>
            <InputGroup flexDirection={"column"}>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                size="md"
                type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={values ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Senha..."
                onChangeText={(text: string) => setValues({ ...values, senha: text })}
              />
            </InputGroup>
            <Button 
              colorScheme="primary" 
              onPress={handleLogin}
              my={5}
            >
              Entrar
            </Button>
          </VStack>
        </Box>
      </View>
    </TouchableWithoutFeedback>
  )

  /* 
    return (
      <Container>
        <KeyboardAvoidingView
          behavior={"padding"}>
          <ScrollView style={{ width: "100%" }}>
            <Title>
              Login
            </Title>
            <LogoImage source={logo} />
            <Flex
              alignItems={"center"}
              height={120}
            >
              <FormControl.Label >Login</FormControl.Label>
              <Input
                h={50}
                w="80%"
                size="md"
                alignItems={"center"}
                justifyContent={"center"}
                variant="rounded"
                InputLeftElement={<Icon as={<AntDesign Cpf="user" />} size={5} ml="2" color="muted.400" />} placeholder="Nome..."
                onChangeText={(text: string) => setValues({ ...values, cpf: text })}
              />
            </Flex>
            <Flex alignItems={"center"} height={"140"}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                size="md"
                w="80%"
                variant="rounded"
                type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={values ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Senha..."
                onChangeText={(text: string) => setValues({ ...values, senha: text })}
              />
            </Flex>
            <Flex alignItems={"center"}>
              <Button borderRadius={30} alignItems={"center"} width="80%" h={50} colorScheme="primary" onPress={handleLogin}>
                Login
              </Button>
            </Flex>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    ); */
};

export default Auth;
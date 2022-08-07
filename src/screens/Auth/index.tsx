import React, { useState } from "react";
import { Container, LogoImage, Title } from './styles';
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.jpg'
import { Box, Button, Flex, FormControl, Heading, Icon, Image, Input, InputGroup, KeyboardAvoidingView, NativeBaseProvider, ScrollView, Text, View, VStack } from "native-base";
import { useAuth } from "../../hook/useAuth";
import { Funcionario } from "../../models/Funcionario";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, TouchableWithoutFeedback } from "react-native";


const Auth: React.FC = () => {
  const { signIn } = useAuth();
  const [values, setValues] = useState<Funcionario>({} as Funcionario);
  const [show, setShow] = React.useState(false);

  const handleLogin = () => {
    //signIn({ cpf: '21354311110', senha: 'alfa@213' })
    if (values?.cpf && values.senha) {
      signIn(values)
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View flex={1}>
        <View flex={1}>
          <Image
            flex={1}
            w={null}
            marginTop={0}
            source={bg}
            resizeMode="cover"
            resizeMethod="scale"
          />
        </View>
        <Box
          bgColor={"white"}
          position={"absolute"}
          bottom={0}
          left={0}
          right={0}
          paddingY={35}
          paddingX={10}
          borderTopRadius={8}
        >
          <VStack space={4}>
            <Heading>
              Login
            </Heading>
            <InputGroup flexDirection={"column"}>
              <FormControl.Label>CPF</FormControl.Label>
              <Input
                borderRadius={8}
                size="md"
                w={"full"}
                InputLeftElement={
                  <Icon as={<AntDesign name="user" />} size={5} ml="2" color="muted.400" />} placeholder="Digte seu CPF"
                onChangeText={(text: string) => setValues({ ...values, cpf: text })}
              />
            </InputGroup>
            <InputGroup flexDirection={"column"}>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                borderRadius={8}
                size="md"
                type={show ? "text" : "password"}
                InputRightElement={
                  <Icon
                    as={<MaterialIcons name={values ? "visibility" : "visibility-off"} />}
                    size={5} mr="2" color="muted.400" onPress={() => setShow(!show)}
                  />
                }
                placeholder="Digte sua senha..."
                onChangeText={(text: string) => setValues({ ...values, senha: text })}
              />
            </InputGroup>
            <Button
              borderRadius={8}
              colorScheme="primary"
              onPress={handleLogin}
              my={5}
              size="lg"
              rightIcon={
                <MaterialIcons
                  name="login"
                  size={16}
                  color="white"
                />
              }

            >
              Entrar
            </Button>
          </VStack>
        </Box>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default Auth;
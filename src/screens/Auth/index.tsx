import React, { useState } from "react";
import { Container, LogoImage, Title } from './styles';
import logo from '../../assets/logo.png'
import { Button, Flex, FormControl, Icon, Input, KeyboardAvoidingView, NativeBaseProvider, ScrollView, Text } from "native-base";
import { useAuth } from "../../hook/useAuth";
import { Funcionario } from "../../models/Funcionario";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Auth: React.FC = () => {
  const { signIn } = useAuth();
  const [values, setValues] = useState<Funcionario>(new Funcionario());
  const [show, setShow] = React.useState(false);

  const handleLogin = () => {
    signIn(values)
  }

  return (
    <View flex={1} bgColor="white" h="full">
      <KeyboardAvoidingView
        behavior={"padding"}
        h="full"
        display={'flex'}
      >
        <ScrollView flex={1} display="flex" h="full">
          <HStack flex={.5}>
            <Heading>
              Login
            </Heading>
            <Image source={logo} flex={1} />
          </HStack>
          <VStack
            p={8}
            space={4}
            flex={1}
            bgColor={"red.100"}
            marginTop="auto"
          >
            <InputGroup flexDirection={"column"}>
              <FormControl.Label>Login</FormControl.Label>
              <Input
                borderRadius={6}
                size="md"
                InputLeftElement={
                  <Icon
                    as={<AntDesign Cpf="user" />}
                    size={5}
                    color="muted.400"
                  />
                }
                placeholder="Digite seu CPF..."
                onChangeText={(text: string) => setValues({ ...values, cpf: text })}
              />
            </InputGroup>
            <InputGroup flexDirection={"column"}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                borderRadius={6}
                size="md"
                type={show ? "text" : "password"}
                InputRightElement={
                  <Icon
                    as={<MaterialIcons name={values ? "visibility" : "visibility-off"} />}
                    size={5} mr="2"
                    color="muted.400"
                    onPress={() => setShow(!show)}
                  />}
                placeholder="Digite a senha..."
                onChangeText={(text: string) => setValues({ ...values, senha: text })}
              />
            </InputGroup>
            <Button
              onPress={handleLogin}
              borderRadius={6}
            >
              Entrar
            </Button>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Auth;
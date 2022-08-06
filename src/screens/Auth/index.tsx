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
    <Container>
    <KeyboardAvoidingView 
    behavior ={"padding"}>
      <ScrollView style={{width: "100%"}}>
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
              justifyContent ={"center"}
              variant="rounded"
              InputLeftElement={<Icon as={<AntDesign Cpf="user" />} size={5} ml="2" color="muted.400" />} placeholder="name" 
              onChangeText={(text: string) => setValues({...values, cpf: text})}
            />
        </Flex>
        <Flex alignItems={"center"} height={"140"}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            size="md"
            w="80%"
            variant="rounded"
            type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={values ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password"
          onChangeText={(text: string) => setValues({...values, senha: text})}
            />
        </Flex>
        <Flex alignItems={"center"}>
          <Button borderRadius={30} alignItems={"center"} width= "80%" h={50} colorScheme= "primary" onPress={handleLogin}>
            Login
          </Button>
        </Flex>
    </ScrollView>
    </KeyboardAvoidingView>
    </Container>
  );
};

export default Auth;
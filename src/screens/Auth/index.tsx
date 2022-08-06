import React, { useState } from "react";
import { Container, LogoImage, Title } from './styles';
import logo from '../../assets/logo.png'
import { Button, FormControl, Icon, Input, KeyboardAvoidingView, NativeBaseProvider, Text } from "native-base";
import { useAuth } from "../../hook/useAuth";
import { Funcionario } from "../../models/Funcionario";
import { AntDesign } from '@expo/vector-icons';


const Auth: React.FC = () => {
  const { signIn } = useAuth();
  const [values, setValues] = useState<Funcionario>(new Funcionario());

  const handleLogin = () => {
    signIn(values)
  }

  return (
    <Container>
      <Title>
        Login
      </Title>
      <LogoImage source={logo} />
      <NativeBaseProvider>
        <FormControl.Label>Login</FormControl.Label>
        <Input
          h={50}
          size="md"
          variant="rounded"
          placeholder="Cpf"
          onChangeText={(text: string) => setValues({...values, cpf: text})}
        />
        <FormControl.Label>Password</FormControl.Label>
        <Input
          size="md"
          variant="rounded"
          h={50}
          mt={20}
          placeholder="Senha"
          type="password"
          onChangeText={(text: string) => setValues({...values, senha: text})}
        />
        <Button h={50} variant="ghost" onPress={handleLogin}>
          Login
        </Button>
      </NativeBaseProvider>
    </Container>
  );
};

export default Auth;
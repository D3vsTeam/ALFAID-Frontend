import React from "react";
import { Container, LogoImage, Title } from './styles';
import logo from '../../assets/logo.png'
import { Button, FormControl, Input, KeyboardAvoidingView, NativeBaseProvider, Text} from "native-base";

const Auth: React.FC = () => {
   return(
    <KeyboardEventeyboardAvoidingView>
      <Title>
        Login
      </Title>
      <LogoImage source={logo}/>
      <NativeBaseProvider>
      <FormControl.Label>Login</FormControl.Label>
        <Input
        size="md"
        variant="rounded"
        placeholder="Cpf"/>
        <FormControl.Label>Password</FormControl.Label>
        <Input
        size="md"
        variant="rounded"
        placeholder="Senha"/>
        <Button variant="ghost">
          Login
        </Button>
      </NativeBaseProvider>
    </KeyboardEventeyboardAvoidingView>
   );
};

export default Auth;
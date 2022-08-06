import React from "react";
import { Container, LogoImage, Title } from './styles';
import logo from '../../assets/logo.png'
import { FormControl, Input, NativeBaseProvider} from "native-base";

const Auth: React.FC = () => {
   return(
   <Container> 
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
      </NativeBaseProvider>
    </Container>
   );

};

export default Auth;
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './src/context/auth';
import { RbcProvider } from './src/context/rbc';
import { TarefaProvider } from './src/context/tarefa';
import Routes from './src/routes';
import { theme } from './src/theme';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NativeBaseProvider theme={theme}>
          <RbcProvider>
            <TarefaProvider>
              <Routes />
            </TarefaProvider>
          </RbcProvider>
        </NativeBaseProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, theme } from 'native-base';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NativeBaseProvider theme={theme}>
          <Routes />
        </NativeBaseProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

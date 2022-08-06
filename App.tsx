import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';
import { theme } from './src/theme';

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

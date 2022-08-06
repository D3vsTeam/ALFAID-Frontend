import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

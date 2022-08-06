import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import FuncionarioCard from '../../components/FuncionarioCard';
import OptionCard from '../../components/OptionCard';
import { useAuth } from '../../hook/useAuth';

export const Home = () => {
  const { signOut, funcionario } = useAuth();
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("AAA")
    navigation.navigate('Form');
  }


  if (!funcionario) {
    return <></>
  }

  return (
    <Box paddingX={4} bgColor="muted.50" h={"full"}>
      <FuncionarioCard />
        {funcionario.isManager ? (
          <OptionCard 
            heading='RDC' 
            label='Visualizar'
            onPress={handlePress}
          />
        ) : (
          <OptionCard 
            heading='RDC' 
            label='Gerar um novo RDC'
            onPress={handlePress}
          />
        )}
    </Box>
  )
}

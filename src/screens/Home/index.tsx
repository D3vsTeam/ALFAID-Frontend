import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import { useAuth } from '../../hook/useAuth';
import { FuncionarioCard, OptionCard } from '../../components'



export const Home = () => {
  const { signOut, funcionario } = useAuth();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Form');
  }
  const handlePressRead = () => {
    navigation.navigate('ListDocs')
  }


  if (!funcionario) {
    return <></>
  }

  return (
    <Box paddingTop={20} paddingX={4} bgColor="muted.50" h={"full"}>
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
        <OptionCard 
          heading='' 
          label='Ler Gerados'
          onPress={handlePressRead}
        />
    </Box>
  )
}

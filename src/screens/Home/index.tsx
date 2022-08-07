import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import { useAuth } from '../../hook/useAuth';
import { FuncionarioCard, OptionCard } from '../../components'
import { View } from 'react-native';
import { PageImg } from '../PageImg';

export const Home = () => {
  const { signOut, funcionario } = useAuth();
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(funcionario)
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

      <OptionCard
        heading='RDO'
        label='Visualizar e Aprovar'
        onPress={handlePressRead}
      />

      <View>
        <OptionCard
          heading='RDC'
          label='Gerar um novo RDC'
          onPress={handlePress}
        />
        <OptionCard
          heading=''
          label='Visualizar'
          onPress={handlePressRead}
        />
      </View>


    </Box>
  )
}

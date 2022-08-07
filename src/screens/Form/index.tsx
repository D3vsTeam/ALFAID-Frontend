import { useState } from 'react';
import { View } from 'react-native';
import { EquipesList } from '../../components/EquipesList';
import { useAuth } from '../../hook/useAuth';
import { Container } from './styles';

export const Form = () => {
  const { funcionario } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Container>
       <EquipesList />
    </Container>
  )
}



[]
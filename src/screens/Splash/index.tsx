import { Heading, Spinner, VStack } from 'native-base';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export const Splash = () => {
  return (
    <VStack flex={1} space={8} justifyContent="center" alignItems="center">
      <Spinner accessibilityLabel="Loading posts" color={"alfa"} size="lg"/>
      <Heading color="alfa" fontSize="xl">
        Carregando...
      </Heading>
    </VStack>
  )
}

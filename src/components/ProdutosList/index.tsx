import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center, Checkbox, Fab, HStack, Input, useToast, VStack } from "native-base";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { useRbc } from '../../hook/useRbc';
import { Derivacoes, Produto } from '../../models/Produto';
import { ScrollView } from 'react-native';

export const ProdutosList = () => {
  const toast = useToast();
  const [inputValue, setInputValue] = React.useState("");
  const [derivacoes, setDerivacoes] = useState<Derivacoes[]>();
  const [produtos, setProdutos] = useState<Produto[]>();
  const {rbc,setRbc} = useRbc()
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const derivacao = await AsyncStorage.getItem("@AlfaID:derivacoes");
      const produto = await AsyncStorage.getItem("@AlfaID:produtos");
      console.log(derivacao)
      if (derivacao) {
        setDerivacoes(JSON.parse(derivacao))
      }
      if(produto){
        setProdutos(JSON.parse(produto))
      }
      console.log(derivacao)
    })()
  }, [])

  const handleAddProdutos = (isSelected: boolean, id: string) => {
    const teste = produtos?.find(item => item.codigo == id)
    setRbc(prev => {
      if (isSelected) {
        prev.produtos.push(teste)
      } else {
        let index = prev.produtos.findIndex(f => f === teste);
        prev.produtos.splice(index, 1)
      }
      return prev;
    })
  }

  const filteredList = derivacoes
    ? derivacoes.filter(func => func.descricao.startsWith(inputValue))
    : [];

  const handleNext = () => {
    if (rbc.produtos.length > 0) {
      navigation.navigate('Tasks')
    } else {
      toast.show({
        description: "Selecione pelo menos um produto"
      })
    }
  }

  return (
    <>
      <Center w="full" p={8} mt={10} >
        <VStack space={8} w={"full"}>
          <Input
            onChangeText={v => setInputValue(v)}
            value={inputValue}
            placeholder="Pesquisar"
          />
          <ScrollView>
          {filteredList && (
            <VStack space={10}>
              {filteredList.map((produto, i) => (
                <HStack
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                  key={produto.produto_id + i.toString()}
                >
                  <Checkbox
                    onChange={(isSelected) => handleAddProdutos(isSelected, produto.produto_id )}
                    value={produto.descricao}
                    size="lg"
                    colorScheme="info"
                  >
                    {"("+produto.descricao+") "+produto.produto.descricao}
                  </Checkbox>

                </HStack>
              ))}
            </VStack>
          )}
          </ScrollView>
        </VStack>
      </Center>
      <Fab
        justifyContent='flex-end'
        alignItems='flex-end'
        bottom={5}
        onPress={handleNext}
        renderInPortal={false}
        shadow={1}
        colorScheme="success"
        placement="bottom-right"
        label={"Avançar"}
        rightIcon={<Ionicons name="arrow-forward" size={20} color="white" />}
      />
    </>
  );
};
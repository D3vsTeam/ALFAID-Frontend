import AsyncStorage from "@react-native-async-storage/async-storage"
import { getEquipe } from "./funcionarioService"
import { getDerivacoes, getProdutos } from "./produtoService";

export const buildOfflineData = async () => {
  const [ equipes, produtos, derivacoes ] = await Promise.all([
    getEquipe(), getProdutos(), getDerivacoes()
  ]);

  await AsyncStorage.setItem("@AlfaID:equipes", JSON.stringify(equipes.data))
  await AsyncStorage.setItem("@AlfaID:produtos", JSON.stringify(produtos.data))
  await AsyncStorage.setItem("@AlfaID:derivacoes", JSON.stringify(derivacoes.data))
}
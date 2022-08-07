import AsyncStorage from "@react-native-async-storage/async-storage"
import { getEquipe } from "./funcionarioService"
import { getProdutos } from "./produtoService";

export const buildOfflineData = async () => {
  const [ equipes, produtos ] = await Promise.all([
    getEquipe(), getProdutos()
  ]);

  await AsyncStorage.setItem("@AlfaID:equipes", JSON.stringify(equipes.data))
  await AsyncStorage.setItem("@AlfaID:produtos", JSON.stringify(produtos.data))
}
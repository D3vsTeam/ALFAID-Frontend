import AsyncStorage from "@react-native-async-storage/async-storage"
import { getEquipe } from "./funcionarioService"

export const buildOfflineData = async () => {
  const [ equipes ] = await Promise.all([
    getEquipe()
  ]);

  await AsyncStorage.setItem("@AlfaID:equipes", JSON.stringify(equipes.data))
}
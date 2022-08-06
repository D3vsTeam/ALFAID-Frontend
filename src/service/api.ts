import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.5.116:4000'
})

api.interceptors.request.use(config => {
  let token: string | null = null;

  (async () => {
    token = await AsyncStorage.getItem("@AlfaID:token");
  })()
  
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

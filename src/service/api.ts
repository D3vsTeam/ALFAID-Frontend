import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.5.116:4000'
})

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem("@AlfaID:token");

  console.log(token)
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

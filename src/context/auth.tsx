import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import { Funcionario } from "../models/Funcionario";
import { authenticate } from "../service/authService";
import AsyncStorage from "@react-native-async-storage/async-storage"

type AuthContextData = {
  signed: boolean,
  funcionario: any,
  signIn: (userData: any) => Promise<void>,
  signOut: () => void,
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [funcionario, setFuncionario] = useState<Funcionario | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const storagedFunc = await AsyncStorage.getItem("@AlfaID:funcionario")
      const storagedToken = await AsyncStorage.getItem("@AlfaID:token")

      if (storagedFunc && storagedToken) {
        setFuncionario(JSON.parse(storagedFunc))
        setLoading(false)
      }
    })()
  }, [])

  const signIn = async (func: Funcionario) => {
    try {
      const response = await authenticate(func)
      setFuncionario(response.data);
    
      await AsyncStorage.setItem("@AlfaID:funcionario", JSON.stringify(response.data))
      await AsyncStorage.setItem("@AlfaID:token", response.data.token)

    } catch (err: any) {
      let {message} = err?.response?.data;
      Alert.alert(message)
    }
  }

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setFuncionario(null);
    })

    //navigate('/login', { replace: true })
  }

  return (
    <AuthContext.Provider value={{ signed: !!funcionario, funcionario, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
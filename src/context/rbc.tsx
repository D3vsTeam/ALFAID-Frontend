import React, { createContext, useEffect, useState } from "react";
import { RBC } from "../models/RBC";

type RbcContextData = {
  rbc: RBC,
  saveRbcInternal: () => void;
  setRbc: React.Dispatch<React.SetStateAction<RBC>>,
  initializeRbc: () => void;
}

export const RbcContext = createContext<RbcContextData>({} as RbcContextData);

export const RbcProvider: React.FC = ({ children }) => {
  const [rbc, setRbc] = useState<RBC>(new RBC());


  useEffect(() => {
    (async () => {
      //const storagedFunc = await AsyncStorage.getItem("@AlfaID:funcionario")
    })()
  }, [])

  const saveRbcInternal = () => {

  }

  const initializeRbc = () => {
    setRbc(new RBC())
  }

  return (
    <RbcContext.Provider value={{ rbc, saveRbcInternal, setRbc, initializeRbc }}>
      {children}
    </RbcContext.Provider>
  )
}
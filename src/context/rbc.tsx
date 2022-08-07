import React, { createContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { RBC } from "../models/RBC";
import { Tarefa } from "../models/Tarefa";

type RbcContextData = {
  rbc: RBC,
  saveRbcInternal: () => void;
  setRbc: React.Dispatch<React.SetStateAction<RBC>>,
  insertTarefa: (tarefa: Tarefa) => void
}

export const RbcContext = createContext<RbcContextData>({} as RbcContextData);

export const RbcProvider: React.FC = ({ children }) => {
  const [rbc, setRbc] = useState<RBC>(new RBC());
  console.log(new RBC().tarefa)

  useEffect(() => {
    (async () => {
      //const storagedFunc = await AsyncStorage.getItem("@AlfaID:funcionario")
    })()
  }, [])

  const saveRbcInternal = () => {

  }

  const insertTarefa = useCallback((tarefa: Tarefa) => {
    if (!rbc.tarefa.includes(tarefa)) {
      setRbc(prev => {
        prev.tarefa.push(tarefa)
        return prev;
      })
    } else {
      setRbc(prev => {
        let index = prev.tarefa.findIndex(t => t === tarefa)
        const newTar = { ...prev };
        newTar.tarefa[index] = tarefa;
        return newTar;
      })
    }
  }, [rbc.tarefa])

  return (
    <RbcContext.Provider value={{ rbc, saveRbcInternal, setRbc, insertTarefa }}>
      {children}
    </RbcContext.Provider>
  )
}
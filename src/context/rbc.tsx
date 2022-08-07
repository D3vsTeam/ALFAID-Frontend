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

  const saveRbcInternal = () => {

  }

  const insertTarefa = useCallback((tarefa: Tarefa) => {
    let index = rbc.tarefa.findIndex(t => t.descricao === tarefa.descricao)
    if (index === -1) {
      setRbc(prev => {
        const newO = {...prev}
        newO.tarefa.push(tarefa)
        return newO;
      })
    } else {
      setRbc(prev => {
        prev.tarefa[index] = tarefa
        return prev;
      })
    }
  }, [rbc])

  return (
    <RbcContext.Provider value={{ rbc, saveRbcInternal, setRbc, insertTarefa }}>
      {children}
    </RbcContext.Provider>
  )
}
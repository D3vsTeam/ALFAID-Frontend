import { createContext, useCallback, useState } from "react";
import { Tarefa } from "../models/Tarefa";

export type TarefaContextType = {
  tarefa: Tarefa,
  setTarefa: React.Dispatch<React.SetStateAction<Tarefa>>,
  updateTarefa: (tarefa: Tarefa) => void
}

export const TarefaContext = createContext<TarefaContextType>({} as TarefaContextType)

export const TarefaProvider: React.FC = ({ children }) => {
  const [tarefa, setTarefa] = useState<Tarefa>(new Tarefa());

  const updateTarefa = useCallback((tarefa: Tarefa) => {
    setTarefa(tarefa)
  }, [tarefa])

  return (
    <TarefaContext.Provider value={{ tarefa, setTarefa, updateTarefa }}>
      {children}
    </TarefaContext.Provider>
  )
}
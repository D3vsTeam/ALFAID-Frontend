import { createContext } from "react";
import { Tarefa } from "../models/Tarefa";

export type TarefaContextType = {
  tarefa: Tarefa,
  setTarefa: React.Dispatch<React.SetStateAction<Tarefa>>
}

export const TarefaContext = createContext<TarefaContextType>({} as TarefaContextType)
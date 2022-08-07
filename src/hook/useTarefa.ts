import { useContext } from "react";
import { TarefaContext } from "../context/tarefa";

export const useTarefa = () => {
  return useContext(TarefaContext);
}

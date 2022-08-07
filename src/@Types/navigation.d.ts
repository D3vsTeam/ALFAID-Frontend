import { Tarefa } from "../models/Tarefa"

export declare global {
   namespace ReactNavigation {
    interface RootParamList {
      Home: undefined,
      Form: undefined,
      NewActivity: undefined,
      ListDocs: undefined,
      Tasks: undefined,
      MenuTarefas: {
        tarefa?: Tarefa
      },
      PageImg: undefined,
      PageFunc: undefined,
      PageAvaliacao: undefined,
      PageCamera: undefined
    }
   }
}
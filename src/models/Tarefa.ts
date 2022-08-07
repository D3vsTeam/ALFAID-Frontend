import { Funcionario } from "./Funcionario";

export class Tarefa {
  descricao: string;
  equipes: Funcionario[] = [];
  completa: boolean
}
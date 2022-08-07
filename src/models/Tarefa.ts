import { Funcionario } from "./Funcionario";

export class Tarefa {
  descricao: string;
  equipes: Funcionario[];
  completa: boolean

  constructor() {
    this.descricao = ""
    this.equipes = []
    this.completa = false
  }
}
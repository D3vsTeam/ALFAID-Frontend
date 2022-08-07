import { Equipe } from "./Equipe";
import { Funcionario } from "./Funcionario";
import { Tarefa } from "./Tarefa";

export class RBC {
  equipes: Funcionario[] = [];
  tarefa: Tarefa[] = [{
    completa: false,
    descricao: "Teste 1",
    equipes: []
  }, {
    completa: true,
    descricao: "Teste 3",
    equipes: []
  }];
}
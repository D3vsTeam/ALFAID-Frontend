import { Equipe } from "./Equipe";
import { Funcionario } from "./Funcionario";
import { Produto } from "./Produto";
import { Tarefa } from "./Tarefa";

export class RBC {
  equipes: Funcionario[] = [];
  produtos: Produto[] =[];
  tarefa: Tarefa[] = [
  {
    completa: false,
    descricao: "Teste 1",
    equipes: [],
    avaliacao: 2
  }, 
  {
    completa: true,
    descricao: "Teste 3",
    equipes: [],
    avaliacao: 1
  }];
}
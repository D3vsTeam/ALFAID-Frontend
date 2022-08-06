export class Funcionario {
  cpf: string;
	senha: string;
	nome: string;
	email: string;
	permission_id: string;
	status: string;
	matricula: number;
	dataAdmissao: Date;
	funcao_id: number;
	token: string;
	isManager: boolean;
	funcoes: {
		descricao: string
	}
	isSelected: boolean;
}
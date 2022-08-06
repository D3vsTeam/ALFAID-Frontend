export class Produto {
  codigo: string
  descricao: string
  derivacoes: Derivacoes[]
}

export interface Derivacoes {
  produto_id: string
  derivacao: string
  descricao: string
}

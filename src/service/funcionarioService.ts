import { AxiosResponse } from "axios"
import { Equipe } from "../models/Equipe"
import { Funcionario } from "../models/Funcionario"
import { api } from "./api"

export const getEquipe = () => {
  return api.get('/get-equipes') as Promise<AxiosResponse<Funcionario[], any>>
}
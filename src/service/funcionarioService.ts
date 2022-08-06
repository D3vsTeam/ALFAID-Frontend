import { AxiosResponse } from "axios"
import { Equipe } from "../models/Equipe"
import { api } from "./api"

export const getEquipe = () => {
  return api.get('/get-equipes') as Promise<AxiosResponse<Equipe[], any>>
}
import { AxiosResponse } from "axios"
import { Derivacoes, Produto } from "../models/Produto"
import { api } from "./api"

export const getProdutos = () => {
  return api.get("/get-produtos") as Promise<AxiosResponse<Produto[], any>>
}

export const getDerivacoes = () => {
  return api.get("/get-derivacoes") as Promise<AxiosResponse<Derivacoes[], any>>
}
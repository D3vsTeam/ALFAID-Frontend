import { AxiosResponse } from "axios"
import { Produto } from "../models/Produto"
import { api } from "./api"

export const getProdutos = () => {
  return api.get("/get-produtos") as Promise<AxiosResponse<Produto[], any>>
}
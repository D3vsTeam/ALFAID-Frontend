import axios, { AxiosResponse } from "axios"
import { Produto } from "../models/Produto"

export const getProdutos = () => {
  return axios.get("/get-produtos") as Promise<AxiosResponse<Produto[], any>>
}
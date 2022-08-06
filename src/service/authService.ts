import { AxiosResponse } from "axios";
import { Funcionario } from "../models/Funcionario";
import { api } from "./api";

export const authenticate = ({ cpf, senha }: Funcionario) => {
  return api.post("/login", { cpf, senha }) as Promise<AxiosResponse<Funcionario, any>>;
}

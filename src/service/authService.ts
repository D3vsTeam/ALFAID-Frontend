import { AxiosResponse } from "axios";
import { Funcionario } from "../models/Funcionario";
import { api } from "./api";

export const authenticate = ({ email, senha }: Funcionario) => {
  return api.post("/login", { email, senha }) as Promise<AxiosResponse<Funcionario, any>>;
}

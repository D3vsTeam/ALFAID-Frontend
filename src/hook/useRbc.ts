import { useContext } from "react";
import { RbcContext } from "../context/rbc";

export const useRbc = () => {
  return useContext(RbcContext);
}

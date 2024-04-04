import { Produto } from "./produto";

export interface OrderProduct {
  produto:Produto,
  quantidade:number,
  valor:number
}

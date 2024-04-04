import { OrderProduct } from "./order-product";

export interface Order {
  id?:String,
  value:String,
  client:String,
  status:String,
  data_pedido:Date,
  products:OrderProduct[]
}

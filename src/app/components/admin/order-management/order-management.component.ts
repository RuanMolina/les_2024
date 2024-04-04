import { Component } from '@angular/core';
import { Order } from 'src/app/interface/order';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
displayedColumns: String[] =['client','products','status','value','actions'];
pedidos: Order[]=[{id:'1',data_pedido:new Date(),value:'R$10,90',client:'Ruan',status:'Entregue',products:[{produto:{titulo:'',autor:'',editora:'',img_url:'',preco:'',id:1},quantidade:2,valor:1}]}
,{id:'1',value:'R$10,90',data_pedido:new Date(),client:'Ruan',status:'Em transporte',products:[{produto:{titulo:'',autor:'',editora:'',img_url:'',preco:'',id:1},quantidade:2,valor:1}]}];

}


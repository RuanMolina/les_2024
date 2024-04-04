import { Component } from '@angular/core';
import { Order } from 'src/app/interface/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  displayedColumns: String[] =['products'];
  pedidos: Order[]=[
    {id:'1',value:'R$10,90',client:'Ruan',data_pedido:new Date(),status:'Entregue',products:[
      {produto:{titulo:'Livro 1',autor:'',editora:'',img_url:'',preco:'',id:1},quantidade:2,valor:1},
      {produto:{titulo:'Livro 2',autor:'',editora:'',img_url:'',preco:'',id:1},quantidade:2,valor:2}]}
  ,{id:'1',value:'R$10,90',client:'Ruan',status:'Em transporte',data_pedido:new Date(),products:[{produto:{titulo:'',autor:'',editora:'',img_url:'IMAGEM',preco:'',id:1},quantidade:2,valor:1}]}];

  log(){
  }
  formatarData(data:Date){

     const dia =data.getDate().toString();
     const mes = (data.getMonth()+1).toString();
     const ano = data.getFullYear().toString();
    return dia +'/'+ mes + '/' +ano;
  }
}

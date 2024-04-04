import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

  valorTotalCarrinho:number=29.90;
  valorExibido:String='R$59,80';
  valorFrete: String='R$10,00';
  valorTotal:String='R$69,80'

  displayedColumns: string[] = ['img_url','titulo','quantidade','preco']
  produtosCarrinho:ProdutosCarrinho[] =[
    {
      produto:{
        id:1,titulo:'One piece',preco:'29,90',
      autor:'Eichiro Oda',editora:'Shonen',img_url:'../../../assets/onepiece1.jpg'
      },
      quantidade:2,
      valor_total:29.90
    }
  ]

  ngOnInit(): void {


   }


}
export interface ProdutosCarrinho{
  produto:Produto,
  quantidade:number,
  valor_total:number
}

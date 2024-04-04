import { Component } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
produtos: Produtos[] = [{
  id:0,
  titulo:'Livro 1',
  autor:'autor 1',
  editora:'editora 1',
  preco:'10,00'
}];
displayedColumns: string[] = ['titulo','autor','editora','preco','actions']

}
export interface Produtos{
  id:number
  titulo:String,
  autor:String,
  editora:String,
  preco:String
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  deslogar =(()=>this.logado = !this.logado)
  categorias:String[]=
  ['Biografia','Poesia','Romance','Acadêmico/Cientifico','Mangás']
  userOptions:headerOption[]=[{desc:'Meu Perfil',link:'/user/profile'},{desc:'Meus Pedidos',link:'/user/order'},{desc:'Sair',link:''}]
  adminOptions:headerOption[]=[{desc:'Cadastrar',link:'/register'},{desc:'Gestão de Produtos',link:'/admin/product'},{desc:'Gestão de Pedidos',link:'/admin/order'},{desc:'Gestão de Usuario',link:'/admin/user'},{desc:'Dashboard',link:'/dashboard'}];
  logado: boolean = true;
  admin:boolean= true;





}
export interface headerOption{
  desc:String,
  link:String | (() => any)
}

import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { ProdutoCard } from 'src/app/interface/produto-card';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {
  constructor(){}


  produtos :ProdutoCard[]=[{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  },{
    img_url:'../../../assets/onepiece1.jpg',
    titulo:'One piece vol.3',
    autor:'Eichiro Oda',
    editora:'Editora Panini',
    preco:'R$10.50'

  }]


  // Atributos da paginação
  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  // sidenav side pesquisa
  categorias:String[]=['Biografia','Poesia','Romance','Acadêmico/Cientifico','Mangás']
  editoras:String[]=['Panini']
  selectedOptions: String[]=[];
  selectedOptionsCat: String[]=[];
  selectedOptionsEdit: String[]=[];

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
  onCheckboxClick($event: MouseEvent) {

    this.selectedOptions = this.selectedOptionsCat.concat(this.selectedOptionsEdit);
    console.log(this.selectedOptionsCat)
    console.log(this.selectedOptionsEdit)
    console.log(this.selectedOptions)

  }
}

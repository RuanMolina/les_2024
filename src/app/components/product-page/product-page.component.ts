import { Component } from '@angular/core';
import { Livro } from 'src/app/interface/livro';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  livro:Livro ={
    id: 0,
    autor: 'Eiichiro oda',
    categoria: 'Mangá',
    ano: '1999',
    titulo: 'One piece',
    editora: 'Panini',
    edicao: '1',
    isbn: '1111',
    numeroDePaginas: '45',
    sinopse: 'A tripulação pirata mais famosa dos quadrinhos finalmente joga sua âncora de novo no Brasil! Com roteiro e arte de Eiichiro Oda, o mangá de maior sucesso de todos os tempos retorna ao país, agora sob a bandeira Planet Mangá, da Panini Comics! Para ser o rei dos piratas, Luffy, o homem-borracha, precisa reunir uma tripulação e encontrar o maior de todos os tesouros. No caminho, enfrentará a Marinha, monstros, e muitos outros piratas que têm o mesmo objetivo. Então prepare-se pra encarar os perigos dos mares. A maior aventura de todas vai recomeçar!',
    dimensoes: {
      altura: '20',
      largura: '13,6',
      peso: '',
      profundidade: '1'
    },
    precificacao: '12.00',
    codBarras: '11111'
  }
}


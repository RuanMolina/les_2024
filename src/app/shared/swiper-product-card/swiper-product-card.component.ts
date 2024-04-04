import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProdutoCard } from 'src/app/interface/produto-card';

declare let Swiper: any;
@Component({
  selector: 'app-swiper-product-card',
  templateUrl: './swiper-product-card.component.html',
  styleUrls: ['./swiper-product-card.component.css'],
})
export class SwiperProductCardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Swiper('.swiper-card', {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      direction: 'horizontal',
      loop: false,
    });
  }
  products: ProdutoCard[] = [
    {
      img_url: '../../../assets/onepiece1.jpg',
      titulo: 'titulo',
      autor: 'autor',
      editora: 'editora',
      preco: 'R$10.00',
    },
    {
      img_url: '../../../assets/onepiece1.jpg',
      titulo: 'titulo',
      autor: 'autor',
      editora: 'editora',
      preco: 'R$10.00',
    },
    {
      img_url: '../../../assets/onepiece1.jpg',
      titulo: 'titulo',
      autor: 'autor',
      editora: 'editora',
      preco: 'R$10.00',
    },
    {
      img_url: '../../../assets/onepiece1.jpg',
      titulo: 'titulo',
      autor: 'autor',
      editora: 'editora',
      preco: 'R$10.00',
    },
    {
      img_url: '../../../assets/onepiece1.jpg',
      titulo: 'titulo',
      autor: 'autor',
      editora: 'editora',
      preco: 'R$10.00',
    }

  ];
}

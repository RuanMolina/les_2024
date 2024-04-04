import { AfterViewInit, Component} from '@angular/core';
import { Banner } from 'src/app/interface/banner';

declare let Swiper: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      effect:'fade',
      slidesPerView: 3,
      spaceBetween: 100,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 3000,
        direction: 'horizontal',
        loop: true
    });
  }


  banners:Banner[] =[
  {
    image_url:'../../../assets/CLASSICOS.jpg',
    url:'../../../assets/CLASSICOS.jpg',
    alt:'Imagem classicos'
  },
  {
    image_url:'../../../assets/INFANTIL.jpg',
    url:'../../../assets/INFANTIL.jpg',
    alt:'Imagem infantil'
  },{
    image_url:'../../../assets/Autores.jpg',
    url:'../../../assets/Autores.jpg',
    alt:'Imagem autores'
  }



]

}


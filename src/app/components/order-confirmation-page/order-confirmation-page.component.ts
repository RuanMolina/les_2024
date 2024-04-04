import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css']
})
export class OrderConfirmationPageComponent implements OnInit{
  formCreditCard!:FormGroup
  meses:String[]=['Janeiro','Fevereiro','Março']

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.createFormCard();
  }


  createFormCard(){
    this.formCreditCard = this.fb.group({
      mes:[],
      ano:[],
      cod:[]
    })
  }
}

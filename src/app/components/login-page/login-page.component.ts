import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  formLogin!: FormGroup;
  formCadastro!: FormGroup;
  constructor( private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.createFormLogin();
    this.createFormCadastro();
  }
  createFormLogin(){
    this.formLogin = this.formBuilder.group(
      {
        username:[''],//,Validators.required
        password:[]
      }
    );
  }
  createFormCadastro(){
    this.formCadastro = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]]

      }
    );
  }
}

import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker';
import { Usuario, UsuarioDTO } from 'src/app/interface/usuario';
import { Estados } from 'src/app/interface/endereco';
import { CEPService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class RegisterPageComponent implements OnInit {
  RegisterForm!: FormGroup;
  data!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;
  estados:Estados[] =[{nome:'São Paulo', sigla:'SP'},{nome:'Rio de Janeiro', sigla:'RJ'}]

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private cepService:CEPService

  ) { }
  ngOnInit(): void {
    this.createForm();
  }
  log() { console.log(this.RegisterForm); }

  register() {
    let usuario: UsuarioDTO = {
      nome: this.RegisterForm.controls['name'].value,
      senha: this.RegisterForm.controls['password'].value,
      email: this.RegisterForm.controls['email'].value,
      cpf: this.RegisterForm.controls['cpf'].value,
      dataNascimento: this.RegisterForm.controls['birthday'].value,
      genero: this.RegisterForm.controls['gender'].value,
      telefone: this.RegisterForm.controls['cel'].value,
      enderecos: {
        descricao: 'Default',
        cep: this.RegisterForm.controls['cep'].value,
        bairro: this.RegisterForm.controls['bairro'].value,
        logradouro: this.RegisterForm.controls['logradouro'].value,
        numero: this.RegisterForm.controls['numero'].value,
        cidade: this.RegisterForm.controls['cidade'].value,
        estado: this.RegisterForm.controls['estado'].value,
        tpLogradouro: '',
        pais: '',
        tpResidencia: ''
      }
    }
    console.log('REGISTER')
    if (this.RegisterForm.valid) {
      this.usuarioService.create(usuario).subscribe(
        resposta => {
          console.log(resposta);
          alert("Usuario Cadastrado")
        },
        err => alert('HTTP Error: ' + err));
    } else {
      alert('Formulario Invalido');
      console.log('Valor de notSame:'+this.RegisterForm.errors?.['notSame']);
      Object.keys(this.RegisterForm.controls).forEach(campo => {
        const controle = this.RegisterForm.get(campo);
        controle?.markAsDirty();
      });
    }

  }


  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  createForm(): void {
    this.RegisterForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        gender: ['', Validators.required],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        birthday: ['', Validators.required],
        cel: ['', [Validators.required, Validators.minLength(10)]],
        cep: ['',[ Validators.required, Validators.minLength(8)]],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        numero: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirm_password: ['', Validators.required]

      }, { validators: this.checkPasswords }
    )
  }

  verificaCEP() {
    const cep:string = this.RegisterForm.controls['cep'].value;
    if (cep.length == 8) { }
    this.cepService.get(cep).subscribe(resultado => {
      console.log(resultado);
      this.RegisterForm.controls['logradouro'].setValue(resultado.logradouro);
      this.RegisterForm.controls['bairro'].setValue(resultado.bairro);
      this.RegisterForm.controls['cidade'].setValue(resultado.localidade);
      this.RegisterForm.controls['estado'].setValue(resultado.uf);

    },
    error=>{
      console.log('erro: ' + error)
    }
    );
  }
}

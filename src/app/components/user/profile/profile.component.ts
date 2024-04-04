import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Telefone } from './../../../interface/telefone';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/interface/endereco';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewAdressComponent } from './dialog/dialog-new-adress/dialog-new-adress.component';
import { DialogNewCardComponent } from './dialog/dialog-new-card/dialog-new-card.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  form!: FormGroup
  usuario!: Usuario;
  usuario$!: Observable<Usuario>;
  load: boolean = false;
  endereco: Endereco = {
    descricao: 'CASA',
    cep: '00000-000',
    bairro: 'bairro 1',
    tpLogradouro: 'rua',
    logradouro: 'rua 1',
    numero: '33',
    cidade: 'Cidade 1',
    estado: 'SP',
    pais: 'BRASIL',
    tpResidencia: 'CASA'
  }



  constructor(
    private usuarioService: UsuarioService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.createForm();
    this.usuario$ = this.usuarioService.listById(100);

    this.usuarioService.listById(100).subscribe(
      result => {
        this.usuario = result
        this.usuario.dataNascimento = new Date(result.dataNascimento)
        console.log(this.usuario)
      },
      error => {
        console.log(error);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000)
        this.setUser();

      }, () => { this.load = true; }

    )
  }
  formatarTelefone(tel: Telefone) {

    return '(' + tel.ddd + ')' + tel.numero;
  }
  setUser() {
    this.usuario = {
      nome: 'ruan',
      senha: '123',
      email: 'email@email.com',
      ativo: '1',
      dataNascimento: new Date(),
      cpf: '00000000000',
      genero: 0,
      cartoes:[],
      enderecos: [this.endereco],
      telefone: { id: 1, ddd: 11, numero: '986503658', tipo: 'rua' }
    };
  }
  createForm() {

    this.form = this.fb.group({
      password: ['', Validators.required],
      new_password: ['', Validators.required]
    }

    )
  }
  atualizarSenha() {
    if (this.usuario.id) {
      this.usuarioService.atualizarSenha((this.usuario.id), this.form.controls['password'].value, this.form.controls['new_password'].value).subscribe(
        result => {
          console.log(result);
          alert('Senha atualizada')
        }, error => {
          console.log(error)
          alert('Senha atual incorreta')
        }

      )
    }
  }
  openDialog() {

    const dialogRef = this.dialog.open(DialogNewAdressComponent, {
      data: {},
      width: '800px',
      height:'400px'
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      const endereco:Endereco={
        cep: result.controls['cep'].value,
        bairro: result.controls['bairro'].value,

        logradouro: result.controls['logradouro'].value,
        numero: result.controls['numero'].value,
        cidade: result.controls['cidade'].value,
        estado: result.controls['estado'].value,
        pais: 'Brasil',
        descricao: '',
        tpLogradouro: '',
        tpResidencia: '',
        userId: this.usuario.id
      }
      this.usuarioService.novoEndereco(endereco).subscribe(
        resultado=>{
          console.log(resultado)
        },
        error=>{
          console.log(error)

        },
        ()=>{
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/user/profile'])
        );
        }
      );
      console.log('The dialog was closed');
    })
  }

  openDialogCard() {

    const dialogRef = this.dialog.open(DialogNewCardComponent, {
      data: {},
      width: '800px',
      height:'400px'
    });

    dialogRef.afterClosed().subscribe(//(result: FormGroup) => {}
    )
  }
}


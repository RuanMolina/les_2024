import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, tap } from 'rxjs';
import { Usuario, UsuarioDTO } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialog/confirmation-dialog/confirmation-dialog.component';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogUpdateUserComponent } from './dialog-update-user/dialog-update-user.component';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {


  displayedColumns: string[] = ['nome', 'email', 'ativo', 'actions'];
  usuarios: Usuario[] = [];
  usuarios$!: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService,
    public dialog: MatDialog,
    private router: Router) { }


  ngOnInit(): void {
    // this.usuarioService.list().subscribe(lista =>{
    //    this.usuarios =lista;
    // });
    this.usuarios$ = this.usuarioService.list();
  }

  desativarUsuario(userId: number) {

    console.log('Desativando id:' + userId)
    this.usuarioService.desativar(userId).subscribe(
      resp => {
        console.log(resp)
        this.refresh();
      },
      error => console.log('erro:' + error)

    );

  }
  refresh() {
    this.usuarios$ = this.usuarioService.list();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/admin/user'])
    );
  }

  openDialog(userId: number): void {
    const mensagem:string= 'Deseja desativar o usuario?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: mensagem ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == true) {
        this.desativarUsuario(userId);

      }

    });

  }
  openDialogUser(user: Usuario): void {
    const modo: string = 'Atualizar'
    let name = user.nome;
    let cpf = user.cpf;
    let email = user.email;
    let gender = user.genero;
    let birthday = user.dataNascimento;
    let cel = user.telefone;
    console.log(user);
    const dialogRef = this.dialog.open(DialogUpdateUserComponent, {
      data: { modo, name, gender, cpf, birthday, cel, email },
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      console.log('The dialog was closed');


      const usuarioDTO: UsuarioDTO = {
        id: user.id,
        nome: result.controls['name'].value,
        email: result.controls['email'].value,
        dataNascimento: result.controls['birthday'].value,
        cpf: result.controls['cpf'].value,
        genero: result.controls['gender'].value,
        telefone: result.controls['telefone'].value
      }
      this.usuarioService.atualizar(usuarioDTO).subscribe(
        resposta => console.log(resposta)
      )

      console.log(result);
      this.refresh();


    });

  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario, UsuarioDTO } from 'src/app/interface/usuario';

@Component({
  selector: 'app-dialog-update-user',
  templateUrl: './dialog-update-user.component.html',
  styleUrls: ['./dialog-update-user.component.css']
})
export class DialogUpdateUserComponent implements OnInit {
  form!:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {modo:string,name:string,
    gender:string,
    cpf:string,
    birthday:string,
    cel:string,
    email:string},
    private fb:FormBuilder
  ) {

  }
  ngOnInit(): void {

    this.createForm();
    if(this.data.modo==='Atualizar'){
      this.popularForm();
    }

  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  createForm(){
    this.form = this.fb.group(
      {
        name:['',Validators.required],
        gender:['',Validators.required],
        cpf:['',Validators.required],
        birthday:['',Validators.required],
        telefone:['',Validators.required],
        email:['',[Validators.required,Validators.email]],


      }
    )
  }
  popularForm(){
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['gender'].setValue(this.data.gender);
    this.form.controls['cpf'].setValue(this.data.cpf);
    this.form.controls['birthday'].setValue(this.data.birthday);
    this.form.controls['telefone'].setValue(this.data.cel);
    this.form.controls['email'].setValue(this.data.email);
  }


}

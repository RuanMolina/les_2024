import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogNewAdressComponent } from '../dialog-new-adress/dialog-new-adress.component';

@Component({
  selector: 'app-dialog-new-card',
  templateUrl: './dialog-new-card.component.html',
  styleUrls: ['./dialog-new-card.component.css']
})
export class DialogNewCardComponent implements OnInit {


  form!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogNewAdressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.form = this.fb.group({
      descricao: ['', [Validators.required]],
      numeroCartao: ['', [Validators.required,Validators.minLength(13),Validators.maxLength(19)]],
      nomeImpresso: ['', Validators.required],
      bandeira: ['',[ Validators.required]],
      codigoSeguranca: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    });
  }
}

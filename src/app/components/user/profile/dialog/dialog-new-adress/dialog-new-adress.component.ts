import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estados } from 'src/app/interface/endereco';
import { CEPService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-dialog-new-adress',
  templateUrl: './dialog-new-adress.component.html',
  styleUrls: ['./dialog-new-adress.component.css']
})
export class DialogNewAdressComponent implements OnInit {

  form!: FormGroup;
  estados: Estados[] = [{ nome: 'São Paulo', sigla: 'SP' }, { nome: 'Rio de Janeiro', sigla: 'RJ' }]

  constructor(
    public dialogRef: MatDialogRef<DialogNewAdressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private fb: FormBuilder,
    private cepService: CEPService
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.form = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(8)]],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      numero: ['', Validators.required]

    });
  }
  getInfo() {
    const cep:string = this.form.controls['cep'].value;
    if (cep.length == 8) { }
    this.cepService.get(cep).subscribe(resultado => {
      console.log(resultado);
      this.form.controls['logradouro'].setValue(resultado.logradouro);
      this.form.controls['bairro'].setValue(resultado.bairro);
      this.form.controls['cidade'].setValue(resultado.localidade);
      this.form.controls['estado'].setValue(resultado.uf);

    },
    error=>{
      console.log('erro: ' + error)
    }
    );
  }
}



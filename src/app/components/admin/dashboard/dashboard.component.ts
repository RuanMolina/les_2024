import { Constructor } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
data: ChartData|undefined ={
  labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho'],
  datasets: [{
    label: '# de Livro de Romance',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  },{
    label: '# de Livro Acadêmico/Cientifico',
    data: [16, 3, 30, 8, 4, 1],
    borderWidth: 1
  }]
};
barChartOptions: any ={
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
range:any;
categorias:String[]=['Biografia','Poesia','Romance','Acadêmico/Cientifico','Mangás']
  editoras:String[]=['Panini']
  selectedOptions: String[]=[];
  selectedOptionsCat: String[]=[];
  selectedOptionsEdit: String[]=[];

constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.createForm();
  }
createForm(){

  this.range = this.fb.group({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  })
}


}

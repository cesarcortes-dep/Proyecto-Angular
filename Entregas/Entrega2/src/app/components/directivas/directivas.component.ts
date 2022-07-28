import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent implements OnInit {
  variable1: number = 10;
  variable2: string = 'Amber';
  variable3: number = 3;
  arreglo: string[] = ['Item 1 ngFor', 'Item 2 ngFor', 'Item 3 ngFor'];
  estudiantes = [
    {
      nombre: 'John Doe',
      correo: 'john.doe@gmail.com',
      
    },
    {
      nombre: 'Alex Ray',
      acorreo: 'alex.ray@gmail.com',
    },
    {
      nombre: 'Kate Hunington',
      acorreo: 'kate.hunington@gmail.com',
    },
    {
      nombre: 'Soraya Letto',
      acorreo: 'soraya.letto@gmail.com',
    },
    {
      nombre: 'Zeynep Dudley',
      acorreo: 'zeynep.dudley@gmail.com',
    },
    {
      nombre: 'Ayat Black',
      acorreo: 'ayat.black@gmail.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  cambiarVariable1() {
    this.variable1 = Math.round(Math.random() * 10);
  }
}

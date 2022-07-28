import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent implements OnInit {
  variable1: number = 10;
  estudiantes = [
    {
      nombre: 'John Doe',
      correo: 'john.doe@gmail.com',
      calificacion: 10,
      
    },
    {
      nombre: 'Alex Ray',
      correo: 'alex.ray@gmail.com',
      calificacion: 4,
    },
    {
      nombre: 'Kate Hunington',
      correo: 'kate.hunington@gmail.com',
      calificacion: 6,
    },
    {
      nombre: 'Soraya Letto',
      correo: 'soraya.letto@gmail.com',
      calificacion: 5.5,
    },
    {
      nombre: 'Zeynep Dudley',
      correo: 'zeynep.dudley@gmail.com',
      calificacion: 8,
    },
    {
      nombre: 'Ayat Black',
      correo: 'ayat.black@gmail.com',
      calificacion: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  calificarnota() {
    this.variable1  = Math.round(Math.random() * 10);
  }
}

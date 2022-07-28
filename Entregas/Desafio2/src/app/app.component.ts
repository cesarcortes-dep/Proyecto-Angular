import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Cesar Cortes ';
  estudiantes = [
    {
      nombre: 'Cesar',
      apellido: 'Cortes',
    },
    {
      nombre:'Laura',
      apellido:'Soto'
    },
  ];
}

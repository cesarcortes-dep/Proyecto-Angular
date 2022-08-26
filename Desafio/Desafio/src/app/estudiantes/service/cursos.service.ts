import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  obtenerEstudiantes() {
    return [
      {id: 1, nombre: 'Cesar', apellido: 'Cortes'},
      {id: 2, nombre: 'Laura', apellido: 'Soto'},
      {id: 3, nombre: 'Jhon', apellido: 'Carmona'},
      {id: 4, nombre: 'Sergio', apellido: 'Rodriguez'},
      {id: 5, nombre: 'Camilo', apellido: 'Sanchez'},
    ];
  }
  obtenerClases(){
return[
  {clase: 'Angular'},
  {clase: 'ReactJs'},
  {clase: 'JavaScript'},
  {clase: 'VueJs'},
  {clase: 'PHP'}

]
  }

  obtenerCursos(){
return[
  {comision:'3240', inscripcion: false},
  {comision:'3241', inscripcion: true},
  {comision:'3242', inscripcion: false},
  {comision:'3243', inscripcion: true},
  {comision:'3244', inscripcion: false},
]
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  obtenerEstudiantes() {
    return [
      {id: 1, nombre: 'Cesar', apellido: 'Cortes'},
      {id: 2, nombre: 'Laura'},
      {id: 3, nombre: 'Jhon'},
      {id: 4, nombre: 'Sergio'},
      {id: 5, nombre: 'Camilo'},
    ];
  }
}

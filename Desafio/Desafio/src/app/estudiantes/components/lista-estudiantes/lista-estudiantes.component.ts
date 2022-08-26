import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../service/cursos.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css'],
})
export class ListaEstudiantesComponent implements OnInit {
  estudiantes: any;

  constructor(
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.estudiantes = this.cursoService.obtenerEstudiantes()
  }
}

import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../service/cursos.service';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css'],
})
export class ListaClasesComponent implements OnInit {
  clases: any;
  constructor(
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.clases = this.cursoService.obtenerClases()
  }
}

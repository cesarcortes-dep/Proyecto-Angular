import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { ListaClasesComponent } from './components/lista-clases/lista-clases.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';


@NgModule({
  declarations: [
    ListaEstudiantesComponent,
    ListaClasesComponent,
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule
  ]
})
export class EstudiantesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    ListaCursosComponent
  ],
  imports: [
    CommonModule, 
    CursosRoutingModule, 
    MatCardModule
  ]
  , providers:
  [CursosModule]
})
export class CursosModule { }

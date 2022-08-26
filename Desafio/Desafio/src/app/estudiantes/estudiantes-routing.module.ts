import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClasesComponent } from './components/lista-clases/lista-clases.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';

const routes: Routes = [
  {path: 'estudiantes', children: [
    {path:'lista-estudiantes', component: ListaEstudiantesComponent}, //lista de estudinates
    {path:'lista-clases', component: ListaClasesComponent}, //clases 
    {path:'lista-cursos', component: ListaCursosComponent}, //cursos 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }

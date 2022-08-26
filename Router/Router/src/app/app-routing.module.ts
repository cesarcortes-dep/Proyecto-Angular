import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './components/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/componente-b/componente-b.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
 {path: 'componenteA', component: ComponenteAComponent},
 {path: 'componenteB', component: ComponenteBComponent},
 {path: '', redirectTo: 'componenteA', pathMatch: 'full'},
 {path: '**', redirectTo: 'componenteB', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

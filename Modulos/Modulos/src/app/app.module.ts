import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { CoreService } from './core/services/core.service';
import { CursosModule } from './cursos/cursos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    BrowserAnimationsModule
  ],
  providers: [
    CoreService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContenidoComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

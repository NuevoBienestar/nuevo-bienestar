import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    ServiciosComponent,
    ContactoComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

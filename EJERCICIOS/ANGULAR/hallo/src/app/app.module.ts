import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePruebaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

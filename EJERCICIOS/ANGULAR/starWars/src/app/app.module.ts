import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {AppComponent} from './app.component';
import {PersonajeComponent} from './personaje/personaje.component';
import {HttpClientModule} from '@angular/common/http';
import {PlanetaComponent} from './planeta/planeta.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    PlanetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

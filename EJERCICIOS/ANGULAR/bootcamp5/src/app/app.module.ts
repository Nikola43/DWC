import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListarPropietariosComponent } from './componentes/listar-propietarios/listar-propietarios.component';
import { InsertarPropietariosComponent } from './componentes/insertar-propietarios/insertar-propietarios.component';
import { DetallePropietariosComponent } from './componentes/detalle-propietarios/detalle-propietarios.component';
import { ListarTipoMascotaComponent } from './componentes/listar-tipo-mascota/listar-tipo-mascota.component';
import { DetalleTipoMascotaComponent } from './componentes/detalle-tipo-mascota/detalle-tipo-mascota.component';
import { InsertarTipoMascotaComponent } from './componentes/insertar-tipo-mascota/insertar-tipo-mascota.component';
import { ListarVeterinariosComponent } from './componentes/listar-veterinarios/listar-veterinarios.component';
import { InsertarVeterinariosComponent } from './componentes/insertar-veterinarios/insertar-veterinarios.component';
import { DetallesVeterinariosComponent } from './componentes/detalles-veterinarios/detalles-veterinarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPropietariosComponent,
    InsertarPropietariosComponent,
    DetallePropietariosComponent,
    ListarTipoMascotaComponent,
    DetalleTipoMascotaComponent,
    InsertarTipoMascotaComponent,
    ListarVeterinariosComponent,
    InsertarVeterinariosComponent,
    DetallesVeterinariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

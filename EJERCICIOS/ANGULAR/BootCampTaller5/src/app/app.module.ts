import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import {HttpClientModule} from '@angular/common/http';
import { VetsComponent } from './components/vets/vets.component';
import { OwnersDetalleComponent } from './components/owners-detalle/owners-detalle.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormVetsComponent } from './components/form-vets/form-vets.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { FormSpecialityComponent } from './components/form-speciality/form-speciality.component';
import { PetTypesComponent } from './components/pet-types/pet-types.component';
import { FromPetTypesComponent } from './components/from-pet-types/from-pet-types.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VetsComponent,
    OwnersDetalleComponent,
    FormOwnerComponent,
    FormVetsComponent,
    SpecialitiesComponent,
    FormSpecialityComponent,
    PetTypesComponent,
    FromPetTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

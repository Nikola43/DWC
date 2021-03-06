import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OwnersComponent} from './components/owners/owners.component';
import {VetsComponent} from './components/vets/vets.component';
import {OwnersDetalleComponent} from './components/owners-detalle/owners-detalle.component';
import {FormOwnerComponent} from './components/form-owner/form-owner.component';
import {FormVetsComponent} from './components/form-vets/form-vets.component';
import {SpecialitiesComponent} from './components/specialities/specialities.component';
import {FormSpecialityComponent} from './components/form-speciality/form-speciality.component';
import {PetTypesComponent} from './components/pet-types/pet-types.component';
import {FromPetTypesComponent} from './components/from-pet-types/from-pet-types.component';

// rutas
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'owners',
    component: OwnersComponent
  }, {
    path: 'vets',
    component: VetsComponent
  },
  {
    path: 'specialities',
    component: SpecialitiesComponent
  },
  {
    path: 'types',
    component: PetTypesComponent
  },
  {
    path: 'owners/:id',
    component: OwnersDetalleComponent
  },
  {
    path: 'owners-add/:id',
    component: FormOwnerComponent
  },
  {
    path: 'vets-add/:id',
    component: FormVetsComponent
  },
  {
    path: 'specialities-add/:id',
    component: FormSpecialityComponent
  }
  ,
  {
    path: 'types-add/:id',
    component: FromPetTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

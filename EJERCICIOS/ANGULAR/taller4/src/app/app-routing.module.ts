import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OwnersComponent} from './components/owners/owners.component';
import {VetsComponent} from './components/vets/vets.component';
import {OwnersDetalleComponent} from './components/owners-detalle/owners-detalle.component';

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
    path: 'owners/:id',
    component: OwnersDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

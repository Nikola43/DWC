import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarPropietariosComponent} from './componentes/listar-propietarios/listar-propietarios.component';
import {DetallePropietarioComponent} from './componentes/detalle-propietario/detalle-propietario.component';
import {FormAnadePropietarioComponent} from './componentes/form-anade-propietario/form-anade-propietario.component';

const routes: Routes = [
  {
    // listamos todos los propietarios
    path: 'propietarios',
    component: ListarPropietariosComponent
  },
  {
    // para añadir propietarios con un id
    path: 'propietarios-add/:id',
    component: FormAnadePropietarioComponent
  },
  {
    //  para listar un propietario por id
    path: 'propietarios/:id',
    component: DetallePropietarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

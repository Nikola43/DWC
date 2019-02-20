import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vet} from '../models/vet';
import {Owner} from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  url: string = 'http://localhost/AJAX/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

// ---------------peticiones Ajax----------------------
  getVets() {
    console.log('Toy en peti vets');
    // Owner[] me devuelve un array de propietarios
    return this.http.post<Vet[]>(this.url, JSON.stringify({accion: 'ListarVets'}));
  }

  getVetPorId(idvet) {
    const pa = {
      id: idvet,
      accion: 'ObtenerVetId'
    };
    console.log('Toy en peti getvETpORID');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Vet>(this.url, JSON.stringify(pa));
  }

  // insertar un owner en el formulario

  insertarVet(vet: Vet) {
    const pa = {
      accion: 'AnadeVet',
      vet: vet,
    };
    console.log('Toy en peti insertando veterinario');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    let a = this.http.post<any>(this.url, JSON.stringify(pa));
    console.log(a);
    return a;
  }

// borramos el owner y mostramos el listado
  delVetList(id: number) {
    const pa = {
      accion: 'BorraVet',
      id: id
    };
    console.log('Toy en peti eliminando vet');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  // borramos el owner y mostramos el listado

  updVet(vet: Vet) {
    const pa = {
      accion: 'ModificaVet',
      vet: vet
    };
    console.log('Toy en peti actualizando vet');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}

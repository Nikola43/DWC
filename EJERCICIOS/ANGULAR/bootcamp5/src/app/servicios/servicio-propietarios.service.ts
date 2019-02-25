import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Propietario} from '../clases/propietario';

@Injectable({
  providedIn: 'root'
})
export class ServicioPropietariosService {
  url: any = 'http://localhost/AJAX/petclinic/servicios.php';
  constructor(private http: HttpClient) { }

  // ---------------peticiones Ajax----------------------
  getPropietarios() {
    console.log('Toy en peti Propietarios');
    // Propietario[] me devuelve un array de propietarios
    // me devuelve una lista de los propietarios
    return this.http.post<Propietario[]>(this.url, JSON.stringify({accion: 'ListarOwners'}));
  }

  getPropietarioPorId(idOwner) {
    const pa = {
      id: idOwner,
      accion: 'ObtenerOwnerId'
    };
    console.log('Toy en peti un propietario');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Propietario>(this.url, JSON.stringify(pa));
  }

  eliminarPropietario(propietarioID) {
    const pa = {
      id: propietarioID,
      accion: 'BorraOwner',
      listado: 'OK'
    };
    console.log('Pety Eliminando un propietario');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Propietario[]>(this.url, JSON.stringify(pa));
  }

}

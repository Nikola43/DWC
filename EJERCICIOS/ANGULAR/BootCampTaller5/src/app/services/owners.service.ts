import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Owner} from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  url: string = 'http://localhost/AJAX/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

// ---------------peticiones Ajax----------------------
  getOwners() {
    console.log('Toy en peti Owners');
    // Owner[] me devuelve un array de propietarios
    return this.http.post<Owner[]>(this.url, JSON.stringify({accion: 'ListarOwners'}));
  }

  getOwnerPorId(idOwner) {
    const pa = {
      id: idOwner,
      accion: 'ObtenerOwnerId'
    };
    console.log('Toy en peti Owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Owner>(this.url, JSON.stringify(pa));
  }

// insertar un owner en el formulario
  insertarOwner(owner: Owner) {

    const pa = {
      accion: 'AnadeOwner',
      owner: owner,
    };
    console.log('Toy en peti insertando owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

// borramos el owner y mostramos el listado
  delOwnerList(id: number) {
    const pa = {
      accion: 'BorraOwner',
      id: id,
      listado: 'OK'
    };
    console.log('Toy en peti insertando owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  // borramos el owner y mostramos el listado
  updOwner(owner: Owner) {
    const pa = {
      accion: 'ModificaOwner',
      owner: owner
    };
    console.log('Toy en peti insertando owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Owner} from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  url: string = 'http://localhost/ajax/petclinic/servicios.php';

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
  insertarOwner(ownerInsertado: Owner) {

    const pa = {
      accion: 'AnadeOwner',
      owner: ownerInsertado,
    };
    console.log('Toy en peti insertando owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

// borramos el owner y mostramos el listado
  delOwnerList(ownerId) {
    const pa = {
      accion: 'BorraOwner',
      id: ownerId,
      listado: 'OK'
    };
    console.log('Toy en peti insertando owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  // borramos el owner y mostramos el listado
  updOwner(ownerActualizado: Owner) {
    const pa = {
      accion: 'ModificaOwner',
      owner: ownerActualizado
    };
    console.log('Toy en peti insertando owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}

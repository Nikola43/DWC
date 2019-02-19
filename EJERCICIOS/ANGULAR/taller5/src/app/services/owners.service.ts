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
    }
    console.log('Toy en peti Owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Owner>(this.url, JSON.stringify(pa));
  }

  insertarOwner(owner: Owner) {

    const pa = {
      accion: 'AnadeOwner',
      owner: owner,
    }
    console.log('Toy en peti Owners');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post(this.url, JSON.stringify(pa));
  }


}

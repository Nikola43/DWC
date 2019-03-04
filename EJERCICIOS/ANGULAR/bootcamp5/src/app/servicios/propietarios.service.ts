import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Propietario} from '../clases/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  private url: any = 'http://localhost/ajax/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

  getListaPropietarios() {
    const p = {
      accion: 'ListarOwners',
    };
    return this.http.post<Propietario[]>(this.url, JSON.stringify(p));
  }

  getPropietarioPorId(propietarioId) {
    const p = JSON.stringify({
      accion: 'ObtenerOwnerId',
      id: propietarioId
    });
    return this.http.post<Propietario>(this.url, p);
  }

  insertarPropietario(propietario: Propietario) {
    const p = JSON.stringify({
      accion: 'AnadeOwner',
      owner: propietario
    });
    return this.http.post<any>(this.url, p);
  }

  eliminarPropietario(propietarioId: number, lista) {
    let respuesta;
    const p = {
      accion: 'BorraOwner',
      id: propietarioId,
      listado: lista
    };
    if (lista === 'OK') {
      respuesta = this.http.post<Propietario[]>(this.url, JSON.stringify(p));
    }
    if (lista === 'FAIL') {
      respuesta = this.http.post<any>(this.url, JSON.stringify(p));
    }
    return respuesta;
  }

  modificarPropietario(propietario: Propietario) {
    const p = {
      accion: 'ModificaOwner',
      owner: propietario
    };
    return this.http.post<any>(this.url, JSON.stringify(p));
  }
}

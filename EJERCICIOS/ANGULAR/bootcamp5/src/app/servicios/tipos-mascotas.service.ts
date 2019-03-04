import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Propietario} from '../clases/propietario';
import {TipoMascota} from '../clases/tipoMascota';

@Injectable({
  providedIn: 'root'
})
export class TiposMascotasService {
  private url: any = 'http://localhost/ajax/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

  getListarTiposMascotas() {
    const pa = JSON.stringify({
      accion: 'ListarPettypes'
    });
    return this.http.post<TipoMascota[]>(this.url, pa);
  }

  getPropietarioPorId(propietarioId) {
    const p = JSON.stringify({
      accion: 'ObtenerOwnerId',
      id: propietarioId
    });
    return this.http.post<Propietario>(this.url, p);
  }

  insertarTipoMascota(tipoMascota: TipoMascota) {
    const p = JSON.stringify({
      accion: 'AnadePettype',
      pettype: tipoMascota
    });
    return this.http.post<any>(this.url, p);
  }

  eliminarTipoMascota(tipoMascotaId: number) {
    const p = {
      accion: 'BorraPettype',
      id: tipoMascotaId,
    };
    return this.http.post<any>(this.url, JSON.stringify(p));
  }

  modificarTipoMascota(tipoMascota: TipoMascota) {
    const p = {
      accion: 'ModificaPettype',
      pettype: tipoMascota
    };
    return this.http.post<any>(this.url, JSON.stringify(p));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Veterinario} from '../clases/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosService {
  private url: any = 'http://localhost/ajax/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

  getListaVeterinarios() {
    const p = {
      accion: 'ListarVets',
    };
    return this.http.post<Veterinario[]>(this.url, JSON.stringify(p));
  }

  getVeterinarioPorId(veterinarioId) {
    const p = JSON.stringify({
      accion: 'ObtenerVetId',
      id: veterinarioId
    });
    return this.http.post<Veterinario>(this.url, p);
  }

  insertarVeterinario(veterinario: Veterinario) {
    const p = JSON.stringify({
      accion: 'AnadeVet',
      vet: veterinario
    });
    return this.http.post<any>(this.url, p);
  }

  eliminarVeterinario(veterinarioId: number) {
    const p = {
      accion: 'BorraVet',
      id: veterinarioId
    };
    return this.http.post<any>(this.url, JSON.stringify(p));
  }


  modificarVeterinario(veterinario: Veterinario) {
    const p = {
      accion: 'ModificaVet',
      vet: veterinario
    };
    return this.http.post<any>(this.url, JSON.stringify(p));
  }
}

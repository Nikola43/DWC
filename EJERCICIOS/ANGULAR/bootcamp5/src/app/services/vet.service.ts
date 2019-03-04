import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vet} from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  url: string = 'http://localhost/AJAX/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

// ---------------peticiones Ajax----------------------
  getVets() {
    console.log('Toy en peti Owners');
    // Owner[] me devuelve un array de propietarios
    return this.http.post<Vet[]>(this.url, JSON.stringify({accion: 'ListarVets'}));
  }
}

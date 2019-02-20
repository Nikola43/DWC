import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Owner} from '../models/owner';
import {Speciality} from '../models/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {
  url: string = 'http://localhost/AJAX/petclinic/servicios.php';

  constructor(private http: HttpClient) {
  }

// ---------------peticiones Ajax----------------------
  getSpecialities() {
    console.log('Toy en peti Speciality');
    // Owner[] me devuelve un array de propietarios
    return this.http.post<Speciality[]>(this.url, JSON.stringify({accion: 'ListarSpecialties'}));
  }

  getSpecialitiesPorId(idSpecialty) {
    const pa = {
      id: idSpecialty,
      accion: 'ObtenerSpecialityId'
    };
    console.log('Toy en peti Speciality');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Speciality>(this.url, JSON.stringify(pa));
  }

// insertar un owner en el formulario
  insertarSpecialities(specialty: Speciality) {

    const pa = {
      accion: 'AnadeSpecialty',
      specialty: specialty,
    };
    console.log('Toy en peti insertando Speciality');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

// borramos el owner y mostramos el listado
  delSpecialitiesList(id: number) {
    const pa = {
      accion: 'BorraSpecialty',
      id: id,
      listado: 'OK'
    };
    console.log('Toy en peti borrando Speciality');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  // borramos el owner y mostramos el listado
  updSpecialities(specialty: Speciality) {
    const pa = {
      accion: 'ModificaSpecialty',
      specialty:specialty
    };
    console.log('Toy en peti insertando Speciality');
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}

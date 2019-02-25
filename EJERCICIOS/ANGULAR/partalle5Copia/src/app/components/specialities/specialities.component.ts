import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Speciality} from '../../models/speciality';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialitiesService} from '../../services/specialities.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  public specialities: Speciality[];
  ocultarMostrarModificar = false;
  @Output() actualiza = new EventEmitter<Speciality>();

  constructor(private route: ActivatedRoute, private router: Router, private specialitiesService: SpecialitiesService) {

    specialitiesService.getSpecialities().subscribe(datos => {
      this.specialities = datos;
      console.log(this.specialities);
    });

  }

  ngOnInit() {
  }


  onSelect(s: Speciality) {
    this.router.navigate(['/specialities', s.id]);
  }

// funcion del html del ownwer para borrar Y ME DEVUELVE LA LISTA
  del(speciality: Speciality) {
    const msg = '¿Estas seguro nque quieres borrar a ' + speciality.name + '?';
    if (confirm(msg)) {
      this.specialitiesService.delSpecialitiesList(speciality.id).subscribe(datos => {
          if (datos.result === 'OK') {
            this.specialities = this.specialities.filter(tipo => tipo.id !== speciality.id);
          } else {
            alert('No se pudo borrar');
          }
        },
        error => console.log(error));
    }
  }

// modificamos
  upd(speciality) {
    console.log('speciality id' + speciality.id);
    this.router.navigate(['/specialities-add', speciality.id]);
    this.specialitiesService.updSpecialities(speciality).subscribe(datos => {
      if (datos.result === 'OK') {
        this.specialities = datos;
        console.log(this.specialities);
        console.log(datos);
      }
    });
  }

  verOcultarFormulario() {
    this.ocultarMostrarModificar = !this.ocultarMostrarModificar;
  }

  actualizaEspecialidad(nuevaEspecialidad: Speciality) {
    /*this.specialities.push(nuevaEspecialidad);
    this.verOcultarFormulario();*/

    this.specialitiesService.updSpecialities(nuevaEspecialidad).subscribe(
      res => {
        this.router.navigate(['/specialities']);
      },
      error => console.log(error));
  }

}

import {Component, OnInit} from '@angular/core';
import {Speciality} from '../../models/speciality';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialitiesService} from '../../services/specialities.service';

@Component({
  selector: 'app-form-speciality',
  templateUrl: './form-speciality.component.html',
  styleUrls: ['./form-speciality.component.css']
})
export class FormSpecialityComponent implements OnInit {
  private speciality: Speciality;
  private textoBoton: string;

  constructor(private specialitiesService: SpecialitiesService, private route: ActivatedRoute, private router: Router) {
    this.speciality = new Speciality();
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit() {
    // obtengo el id  que m estan pasando
    const specialityId = this.route.snapshot.params['id'];
    console.log('Id espe' + specialityId);

    if (specialityId !== '-1') { // se trata de una modificacion
      this.textoBoton = 'Modificar specialities';
      this.specialitiesService.getSpecialitiesPorId(specialityId).subscribe(datos => {
        this.speciality = datos;
      });
    }
  }

// me hace la inserccion  de un prppietario y me devuelve a la pagina owner /callBack
  onSubmit(speciality: Speciality) {
    speciality.id = null;
  }
}

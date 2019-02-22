import { Component, OnInit } from '@angular/core';
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
   
  }

  onSubmit(speciality: Speciality){

    speciality.id=null;
    this.specialitiesService.insertarSpecialities(speciality).subscribe( datos=>{
      console.log(datos);
    });

  }

// me hace la inserccion  de un prppietario y me devuelve a la pagina owner /callBack
  /*onSubmit(speciality: Speciality) {
    if (this.speciality.id) {
      speciality.id = this.speciality.id;
      this.specialitiesService.updSpecialities(speciality).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/specialities']);
        },
        error => console.log(error) // 2 callBack
      );
    } else {
      this.specialitiesService.insertarSpecialities(speciality).subscribe(
        // resp => this.router.navigate(['/owners']); // primer callBack navegamos  hacia owners
        // resp => console.log('añadimos y navegamos a la lista de propietarios'),
        // otra manera de hacer el callBack
        resp => {
          console.log("resp result " + resp);
          if (resp.result == 'OK') {
            alert('Speciality añadido recientemente');
            this.router.navigate(['/specialities']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log(error) // 2 callBack
      );
    }
  }*/

}

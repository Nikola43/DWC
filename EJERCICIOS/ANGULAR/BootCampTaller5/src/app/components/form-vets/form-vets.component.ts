import { Component, OnInit } from '@angular/core';
import {Vet} from '../../models/vet';
import {ActivatedRoute, Router} from '@angular/router';
import {VetService} from '../../services/vet.service';

@Component({
  selector: 'app-form-vets',
  templateUrl: './form-vets.component.html',
  styleUrls: ['./form-vets.component.css']
})
export class FormVetsComponent implements OnInit {
  private vet: Vet;
  private textoBoton: string;

  constructor(private ajax: VetService, private route: ActivatedRoute, private router: Router) {
    this.vet = new Vet();
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit() {

    // obtengo el id  que m estan pasando
    const vetId = this.route.snapshot.params['id'];
    console.log('Id: ' + vetId);

    if (vetId !== '-1') { // se trata de una modificacion
      this.textoBoton = 'MOdificar Vet';
      this.ajax.getVetPorId(vetId).subscribe(datos => {
        this.vet = datos;
      });
    }

  }


// me hace la inserccion  de un prppietario y me devuelve a la pagina owner /callBack
  onSubmit(vet: Vet) {
    console.log(vet);
    if (this.vet.id) {

      vet.id = this.vet.id;

      this.ajax.updVet(vet).subscribe(resp => {
          console.log(resp);
          this.router.navigate(['/vets']);
        },
        error => console.log(error) // 2 callBack
      );

    } else {
      this.ajax.insertarVet(vet).subscribe(
        // resp => this.router.navigate(['/owners']); // primer callBack navegamos  hacia owners
        // resp => console.log('añadimos y navegamos a la lista de propietarios'),
        // otra manera de hacer el callBack
        resp => {
          console.log(resp);
          if (resp.result === 'OK') {
            alert('vet añadido recientemente');
            this.router.navigate(['/vets']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log(error) // 2 callBack
      );
    }

  }
}

import {Component, OnInit} from '@angular/core';
import {Owner} from '../../models/owner';
import {OwnersService} from '../../services/owners.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  private owner: Owner;
  private textoBoton: string;

  constructor(private ajax: OwnersService, private route: ActivatedRoute, private router: Router) {
    this.owner = new Owner();
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit() {
    // obtengo el id  que m estan pasando
    const ownerId = this.route.snapshot.params['id'];
    console.log('Id' + ownerId);
    if (ownerId !== -1) { // se trata de una modificacion
      this.textoBoton = 'MOdificar Owners';
      this.ajax.getOwnerPorId(ownerId).subscribe(datos => {
        this.owner = datos;
      });
    }
  }

// me hace la inserccion  de un prppietario y me devuelve a la pagina owner /callBack
  onSubmit(owner: Owner) {
    if (this.owner.id) {
      owner.id = this.owner.id;
      this.ajax.updOwner(owner).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/owners']);
        },
        error => console.log(error) // 2 callBack
      );
    } else {
      this.ajax.insertarOwner(owner).subscribe(
        // resp => this.router.navigate(['/owners']); // primer callBack navegamos  hacia owners
        // resp => console.log('añadimos y navegamos a la lista de propietarios'),
        // otra manera de hacer el callBack
        resp => {
          console.log(resp);
          if (resp.result === 'OK') {
            alert('Owner añadido recientemente');
            this.router.navigate(['/owners']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log(error) // 2 callBack
      );
    }
  }
}



import {Component, OnInit} from '@angular/core';
import {Owner} from '../../models/owner';
import {OwnersService} from '../../services/owners.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  private owner: Owner;
  private insertado: boolean;

  constructor(private ajax: OwnersService, private route: ActivatedRoute, private router: Router) {
    this.owner = new Owner();
  }

  ngOnInit() {
  }

// funcion que se ejecuta cuando se pulsa el boton submit del formulario
  // recibe como parametro un propietario (owner) (los datos introdicidos en el formulario)
  onSubmit(owner: Owner) {
    this.ajax.insertarOwner(owner).subscribe(data => {
      this.insertado = <boolean>data;
      console.log(this.insertado);

      if (this.insertado) {
        alert('Usuario insertado');
        this.router.navigate(['/owners']);
      } else {
        alert('Usuario  no insertado ');
      }

    });


  }
}

import { Component, OnInit } from '@angular/core';
import {Propietario} from '../../clases/propietario';
import {ServicioPropietariosService} from '../../servicios/servicio-propietarios.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-anade-propietario',
  templateUrl: './form-anade-propietario.component.html',
  styleUrls: ['./form-anade-propietario.component.css']
})
export class FormAnadePropietarioComponent implements OnInit {
  public propietario: Propietario;
  private textoBoton: string;
  constructor(private servicioAjax: ServicioPropietariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
// funcion  k esta en propietario form-anade-propietario para el boton añadir
  onSubmit(value: any) {
  }
}

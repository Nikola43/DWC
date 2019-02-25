import {Component, OnInit} from '@angular/core';
import {Propietario} from '../../clases/propietario';
import {ServicioPropietariosService} from '../../servicios/servicio-propietarios.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detalle-propietario',
  templateUrl: './detalle-propietario.component.html',
  styleUrls: ['./detalle-propietario.component.css']
})
export class DetallePropietarioComponent implements OnInit {
  propietario: Propietario;

  constructor(private propietarioService: ServicioPropietariosService, private router: Router, private route: ActivatedRoute) {
    // ponemos el servivicio y el route / ActivatedRoute:nos permite obtener el parametro
    // creamos un objeto de tipo owner vacio.
    this.propietario = <Propietario> {};

    const  propietarioId = this.route.snapshot.params['id'];
    this.propietarioService.getPropietarioPorId(propietarioId).subscribe(daticos =>
      this.propietario = daticos);
  }

  ngOnInit() {
  }

}

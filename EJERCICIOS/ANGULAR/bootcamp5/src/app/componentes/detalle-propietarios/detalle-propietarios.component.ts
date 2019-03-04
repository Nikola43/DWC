import { Component, OnInit } from '@angular/core';
import {Propietario} from '../../clases/propietario';
import {ActivatedRoute, Router} from '@angular/router';
import {PropietariosService} from '../../servicios/propietarios.service';

@Component({
  selector: 'app-detalle-propietarios',
  templateUrl: './detalle-propietarios.component.html',
  styleUrls: ['./detalle-propietarios.component.css']
})
export class DetallePropietariosComponent implements OnInit {
  public propietario: Propietario;
  constructor(private router: Router, private route: ActivatedRoute, private propietarioService: PropietariosService) {
    this.propietario = new Propietario();
  }

  ngOnInit() {
    const propietarioId = this.route.snapshot.params['id'];
    this.propietarioService.getPropietarioPorId(propietarioId).subscribe(data => this.propietario = data);
  }

  eliminarPropietario(propietarioId: number) {
    // console.log('eliminamos propietario');
    // console.log('id propietario -> ' + propietarioId);
    if (confirm('Esta seguro de que quiere eliminar al propietario?' + propietarioId)) {
      this.propietarioService.eliminarPropietario(propietarioId, 'FAIL').subscribe(data => {
        console.log('Respuesta servidor');
        console.log(data);
        if (data.result === 'OK') {
          this.router.navigate(['/propietarios']);
        } else {
          alert('No se pudo borrar el propietario');
        }
      });
    }
  }
}

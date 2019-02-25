import {Component, OnInit} from '@angular/core';
import {ServicioPropietariosService} from '../../servicios/servicio-propietarios.service';
import {Propietario} from '../../clases/propietario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-propietarios',
  templateUrl: './listar-propietarios.component.html',
  styleUrls: ['./listar-propietarios.component.css']
})
export class ListarPropietariosComponent implements OnInit {
  public propietarios: Array<Propietario>;
  constructor(private servicioAjax: ServicioPropietariosService, private router: Router) {
    this.servicioAjax.getPropietarios().subscribe(datos => {
      this.propietarios = datos;
      console.log(this.propietarios);
    });
  }

  ngOnInit() {
  }
// cuando pincho  en un propietario de la lista me muestra la tabla
  onSelect(p: Propietario) {
    this.router.navigate(['/propietarios', p.id]);
  }

  del(p: Propietario) {
    this.servicioAjax.eliminarPropietario(p.id).subscribe(datos => {
      this.propietarios = datos;
      console.log(this.propietarios);
    });
  }

  upd(p: Propietario) {
  }
}

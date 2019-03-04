import {Component, OnInit} from '@angular/core';
import {Propietario} from '../../clases/propietario';
import {PropietariosService} from '../../servicios/propietarios.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-insertar-propietarios',
  templateUrl: './insertar-propietarios.component.html',
  styleUrls: ['./insertar-propietarios.component.css']
})
export class InsertarPropietariosComponent implements OnInit {
  public propietario: Propietario;
  public textoBoton: string;

  constructor(private propietarioService: PropietariosService, private router: Router, private route: ActivatedRoute) {
    this.propietario = new Propietario();
    this.textoBoton = 'Añadir Propietario';
  }

  ngOnInit() {
    const propietarioId = this.route.snapshot.params['id'];
    if (propietarioId !== '-1') {
      this.textoBoton = 'Modificar Propietario';
      this.propietarioService.getPropietarioPorId(propietarioId).subscribe(data => {
        this.propietario = data;
      });
    }
  }

  onSubmit(propietario: Propietario) {
    // MODIFICA
    if (this.propietario.id) {
      propietario.id = this.propietario.id;
      this.propietarioService.modificarPropietario(propietario).subscribe(data => {
          this.router.navigate(['/propietarios']);
        },
        error => console.log(error)
      );
    } else {
      // INSERTA
      this.propietarioService.insertarPropietario(propietario).subscribe(data => {
          if (data.result === 'OK') {
            alert('Propietario añadido correctamente');
            this.router.navigate(['/propietarios']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log(error)
      );
    }
  }
}

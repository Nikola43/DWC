import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Propietario} from '../../clases/propietario';
import {PropietariosService} from '../../servicios/propietarios.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TipoMascota} from '../../clases/tipoMascota';
import {TiposMascotasService} from '../../servicios/tipos-mascotas.service';

@Component({
  selector: 'app-insertar-tipo-mascota',
  templateUrl: './insertar-tipo-mascota.component.html',
  styleUrls: ['./insertar-tipo-mascota.component.css']
})
export class InsertarTipoMascotaComponent implements OnInit {
  @Output() onNew = new EventEmitter<TipoMascota>();
  @Input() tipoMascota: TipoMascota;

  constructor(private tipoMascotaService: TiposMascotasService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.tipoMascota) {
      this.tipoMascota = new TipoMascota();
    }
  }

  onSubmit(tipoMascota: TipoMascota) {
    // MODIFICA
    console.log('id: ' + tipoMascota.id);
    if (tipoMascota.id) {
      tipoMascota.id = this.tipoMascota.id;
      // es una modificacion
      this.tipoMascotaService.modificarTipoMascota(tipoMascota).subscribe(data => {
        // console.log(new_specialty);
        alert('tipo mascota modificada correctamente');
        // se elimina no se necesita
        this.onNew.emit(null);
        this.tipoMascota = data;
      });
    } else {
      // INSERTA

      this.tipoMascotaService.insertarTipoMascota(tipoMascota).subscribe(data => {
        this.onNew.emit(this.tipoMascota);
        this.tipoMascota = data;
        alert('tipo mascota añadida correctamente');
      });
    }
  }
}

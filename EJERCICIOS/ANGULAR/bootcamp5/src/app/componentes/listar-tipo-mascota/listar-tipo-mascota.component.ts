import {Component, ElementRef, OnInit} from '@angular/core';
import {TiposMascotasService} from '../../servicios/tipos-mascotas.service';
import {Router} from '@angular/router';
import {TipoMascota} from '../../clases/tipoMascota';

@Component({
  selector: 'app-listar-tipo-mascota',
  templateUrl: './listar-tipo-mascota.component.html',
  styleUrls: ['./listar-tipo-mascota.component.css']
})
export class ListarTipoMascotaComponent implements OnInit {
  public listaTiposMascotas: Array<TipoMascota>;
  public confirmacion = false;
  public editado: TipoMascota;

  constructor(private router: Router, private tiposMascotasService: TiposMascotasService, private elementRef: ElementRef) {
    this.tiposMascotasService.getListarTiposMascotas().subscribe(data => {
      this.listaTiposMascotas = data;
    });
  }

  ngOnInit() {
  }

  eliminarTiposMascotas(tipoMascotaId: number) {
    if (confirm('Esta seguro de que quiere eliminar al tipo de mascota?' + tipoMascotaId)) {
      this.tiposMascotasService.eliminarTipoMascota(tipoMascotaId).subscribe(data => {
        this.listaTiposMascotas = data;
        if (data.result === 'OK') {
          this.listaTiposMascotas = this.listaTiposMascotas.filter(tipo => tipo.id !== tipoMascotaId);
        } else {
          alert('Error al eliminar');
        }
      });
    }
  }

  mostrarAnadir() {
    this.confirmacion = !this.confirmacion;
    // para limpiar para añadir
    this.editado = new TipoMascota();
  }

  onNewTipoMascota(tipoMascota: TipoMascota) {
    if (tipoMascota) {
      this.listaTiposMascotas.push(tipoMascota);
    }
    this.mostrarAnadir();
  }

  editarTipoMascota(tipoMascota: TipoMascota) {
    this.editado = tipoMascota;
    this.confirmacion = !this.confirmacion;
  }
}

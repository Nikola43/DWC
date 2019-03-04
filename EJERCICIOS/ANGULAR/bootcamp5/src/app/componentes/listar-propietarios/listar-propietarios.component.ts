import { Component, OnInit } from '@angular/core';
import {Propietario} from '../../clases/propietario';
import {PropietariosService} from '../../servicios/propietarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-propietarios',
  templateUrl: './listar-propietarios.component.html',
  styleUrls: ['./listar-propietarios.component.css']
})
export class ListarPropietariosComponent implements OnInit {
  // array donde almacenaremos la lista de propietarios
  public listaPropietarios: Array<Propietario>;
  constructor(private router: Router, private servicioPropietarios: PropietariosService) {
    this.servicioPropietarios.getListaPropietarios().subscribe(data => {
      this.listaPropietarios = data;
    });
  }

  ngOnInit() {
  }

  eliminarPropietario(propietarioId: number) {
    // console.log('eliminamos propietario');
    // console.log('id propietario -> ' + propietarioId);
    if (confirm('Esta seguro de que quiere eliminar al propietario?' + propietarioId)) {
      this.servicioPropietarios.eliminarPropietario(propietarioId, 'OK').subscribe(data => {
        this.listaPropietarios = data;
        console.log('respuesta servidor');
        console.log(data);
      });
    }
  }

  modificarPropietario(propietarioId: number) {
    // console.log('modificar propietario');
    // console.log('id propietario -> ' + propietarioId);
    this.router.navigate(['propietarios-add', propietarioId]);
  }
}

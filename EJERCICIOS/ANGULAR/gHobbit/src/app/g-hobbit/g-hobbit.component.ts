import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-g-hobbit',
  templateUrl: './g-hobbit.component.html',
  styleUrls: ['./g-hobbit.component.css']
})
export class GHobbitComponent implements OnInit {
  private listaHobbits: string[];
  private gHobbit: string;
  private accion: { id: number, nombre: string, indice: number };

  constructor() {
    this.listaHobbits = ['Frodo Bolson', 'Sam Gamyi', 'Rosita Coton'];
    this.accion = {
      id: 1,
      nombre: 'Añadir',
      indice: -1
    };
  }

  ngOnInit() {
  }

  onClickEliminar(hobbit) {
    const pos = this.listaHobbits.indexOf(hobbit);
    this.listaHobbits.splice(pos, 1);
  }

  insertarModificarHobbit() {
    if (this.accion.id === 1) {
      this.listaHobbits.push(this.gHobbit);
    } else {
      this.listaHobbits[this.accion.indice] = this.gHobbit;
    }
  }

  onClickEditar(hobbit: string, i: number) {
    this.gHobbit = hobbit;
    this.accion.id = 2;
    this.accion.nombre = 'Modificar';
    this.accion.indice = i;
  }
}

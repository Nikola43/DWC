import { Component, OnInit } from '@angular/core';
import {AjaxService} from '../../services/ajax.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public opcionSeleccionada: any;
  public opcionesSelect;
  public listaDetallesFacturas;
  private sumaTotal = 0;
  private sumaIva = 0;
  constructor(private ajax: AjaxService) {
    this.ajax.getListaFacturas().subscribe(data => {
      this.opcionesSelect = data;
    });
  }

  ngOnInit() {
  }


  onChangeSelect(parametro) {
    this.opcionSeleccionada = parametro;
    if (parametro !== '-1') {
      this.ajax.getDetallesFacturas(this.opcionSeleccionada.ID).subscribe(data => {
        this.listaDetallesFacturas = data;

        this.sumaTotal = 0;
        this.sumaIva = 0;
        for (let i = 0; i < this.listaDetallesFacturas.length; i++) {
          this.sumaTotal += this.listaDetallesFacturas[i].CANTIDAD * this.listaDetallesFacturas[i].PRECIO * this.listaDetallesFacturas[i].TIPO_IVA / 100 + this.listaDetallesFacturas[i].CANTIDAD * this.listaDetallesFacturas[i].PRECIO;
          this.sumaIva += this.listaDetallesFacturas[i].CANTIDAD * this.listaDetallesFacturas[i].PRECIO * this.listaDetallesFacturas[i].TIPO_IVA / 100;
        }
      });
    }
  }
}

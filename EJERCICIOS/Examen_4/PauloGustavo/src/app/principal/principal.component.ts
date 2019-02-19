import {Component, OnInit} from '@angular/core';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public opcionSeleccionada: any;
  public opcionesSelect;
  private sumaTotal = 0;
  private sumaIva = 0;
  private listaDetallesFacturas;

  constructor(private servicioAjax: AjaxService) {
    this.servicioAjax.getFacturas().subscribe(data => {
      this.opcionesSelect = data;
    });
  }

  ngOnInit() {
  }

  onChangeSelect(parametro) {
    this.opcionSeleccionada = parametro;
    if (parametro !== '-1') {
      this.servicioAjax.getDetallesFacturas(this.opcionSeleccionada.ID).subscribe(data => {
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

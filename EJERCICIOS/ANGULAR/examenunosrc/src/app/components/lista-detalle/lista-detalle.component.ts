import {Component, Input, OnInit} from '@angular/core';
import {AjaxService} from '../../services/ajax.service';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {
  @Input() idFactura: any = 0;
  @Input() sumaIVA: any = 0;
  @Input() sumaTotal: any = 0;
  @Input() detalle;  //  Añadido por el profesor:
  private listaDetallesFacturas;
  constructor(private ajax: AjaxService) { }

  ngOnInit() {
  }

  borrarDetalleFactura(event, idDetalle) {
    event.preventDefault();
    if (confirm('¿Está seguro que desea borrar este elemento?')) {
      this.ajax.borrarDetallesFacturas(idDetalle, this.idFactura.ID).subscribe(data => {
        this.listaDetallesFacturas = data;
        this.detalle = data; //  Añadido por el profesor:
        this.sumaTotal = 0;
        this.sumaIVA = 0;
        for (let i = 0; i < this.listaDetallesFacturas.length; i++) {
          this.sumaTotal += this.listaDetallesFacturas[i].CANTIDAD * this.listaDetallesFacturas[i].PRECIO * this.listaDetallesFacturas[i].TIPO_IVA / 100 + this.listaDetallesFacturas[i].CANTIDAD * this.listaDetallesFacturas[i].PRECIO;
          this.sumaIVA += this.listaDetallesFacturas[i].CANTIDAD * this.listaDetallesFacturas[i].PRECIO * this.listaDetallesFacturas[i].TIPO_IVA / 100;
        }
      });
    }
  }

}

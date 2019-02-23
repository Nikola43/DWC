import {Component, Input, OnInit} from '@angular/core';
import {AjaxService} from '../../services/ajax.service';

@Component({
  selector: 'app-anade-detalle',
  templateUrl: './anade-detalle.component.html',
  styleUrls: ['./anade-detalle.component.css']
})
export class AnadeDetalleComponent implements OnInit {
  @Input() idFactura: any = null;
  private cantidad;
  private concepto;
  private precio;
  private tipo_iva;

  constructor(private ajax: AjaxService) {
  }

  ngOnInit() {
  }

  insertarDetalleFactura() {
    this.ajax.insertarDetallesFacturas(
      this.idFactura.ID.toString(),
      this.cantidad.toString(),
      this.concepto.toString(),
      this.precio.toString(),
      this.tipo_iva.toString()).subscribe(data => {
    });
    this.idFactura.ID = '';
    this.cantidad = '';
    this.concepto = '';
    this.precio = '';
    this.tipo_iva = '';
    alert('Insertado correctamente');
  }

}

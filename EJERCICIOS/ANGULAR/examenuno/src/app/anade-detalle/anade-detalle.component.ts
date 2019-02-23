import {Component, Input, OnInit} from '@angular/core';
import {AjaxService} from '../ajax.service';

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
  constructor(private servicioAjax: AjaxService) {
  }

  ngOnInit() {
  }

  insertarDetalleFactura() {
    this.servicioAjax.insertarDetallesFacturas(
      this.idFactura.ID.toString(),
      this.cantidad.toString(),
      this.concepto.toString(),
      this.precio.toString(),
      this.tipo_iva.toString()).subscribe(data => {});
  }


}

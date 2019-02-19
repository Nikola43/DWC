import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  private apiUrl: any = 'http://localhost/serviciosWeb/facturas/servidor.php';

  constructor(private http: HttpClient) {
  }

  getFacturas() {
    const parametro = {
      servicio: 'facturas'
    };
    return this.http.post(this.apiUrl, JSON.stringify(parametro));
  }

  getDetallesFacturas(facturaId) {
    const parametro = {
      id: facturaId,
      servicio: 'detalle'
    };
    return this.http.post(this.apiUrl, JSON.stringify(parametro));
  }

  insertarDetallesFacturas(idFactura, cantidad, concepto, precio, tipo_iva) {
    const parametro = {
      servicio: 'anade',
      id: idFactura,
      cantidad: cantidad,
      concepto: concepto,
      precio: precio,
      tipo_iva: tipo_iva
    };
    return this.http.post(this.apiUrl, JSON.stringify(parametro));
  }

  borrarDetallesFacturas(idDetalle, idFactura) {
    const parametro = {
      servicio: 'borra',
      id: idDetalle,
      idFactura: idFactura
    };
    return this.http.post(this.apiUrl, JSON.stringify(parametro));
  }
}

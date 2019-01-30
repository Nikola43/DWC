import {Component, OnInit} from '@angular/core';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  public data: any = null;
  public listaPersonajes: Object[] = null;
  public datosPlaneta: Object = null;

  constructor(private ajaxGetRequest: AjaxService) {
    ajaxGetRequest.httpGetRequest().subscribe(data => {
      this.data = data;
      this.listaPersonajes = this.data.results;
    });
  }

  ngOnInit() {
  }

  private asignarDatos(datos: Object) {
    this.data = datos;
    this.listaPersonajes = this.data.results;
  }

  planetaRequest(event, url: string) {
    event.preventDefault();
    this.ajaxGetRequest.httpGetRequestUrl(url + '?format=json').subscribe(data => {
      this.datosPlaneta = data;
    });
  }

  siguiente() {
    this.ajaxGetRequest.httpGetRequestUrl(this.data.next).subscribe(data => {
      this.asignarDatos(data);
    });
  }

  anterior() {
    this.ajaxGetRequest.httpGetRequestUrl(this.data.previous).subscribe(data => {
      this.asignarDatos(data);
    });
  }

}

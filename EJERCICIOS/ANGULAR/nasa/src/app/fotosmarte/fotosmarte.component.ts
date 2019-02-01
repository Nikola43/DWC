import {Component, OnInit} from '@angular/core';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-fotosmarte',
  templateUrl: './fotosmarte.component.html',
  styleUrls: ['./fotosmarte.component.css']
})
export class FotosmarteComponent implements OnInit {
  public datos: any;
  public listaFotos: Object;
  public listaPersonas: Object;

  constructor(private ajaxRequest: AjaxService) {
    ajaxRequest.httpGetRequest().subscribe(data => {
      this.datos = data;
      this.listaFotos = this.datos.photos;
    });

    ajaxRequest.httpRequestPhpServer().subscribe(data => {
      this.datos = data;
      this.listaPersonas = this.datos;
    });
  }

  ngOnInit() {
  }
}

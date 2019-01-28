import {Component, OnInit} from '@angular/core';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  public data: any;
  public listaPersonajes: Object[];

  constructor(private ajaxGetRequest: AjaxService) {
    ajaxGetRequest.httpGetRequest().subscribe(data => {
      this.data = data;
      this.listaPersonajes = this.data.results;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  planetaRequest(event, url: string) {
    event.preventDefault();
    this.ajaxGetRequest.httpGetRequestUrl(url + '?format=json').subscribe(data => {
      const datos = data;
      console.log(data);
    });
    console.log(url + '?format=json');
  }
}

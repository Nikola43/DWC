import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-prueba',
  templateUrl: './componente-prueba.component.html',
  styleUrls: ['./componente-prueba.component.css']
})
export class ComponentePruebaComponent implements OnInit {
  variable: string;
  miArray: string[];
  constructor() {
  }

  ngOnInit() {
    this.variable = 'hola';
    this.miArray = ['singana', 'jurdegale', 'nanana'];
  }
}

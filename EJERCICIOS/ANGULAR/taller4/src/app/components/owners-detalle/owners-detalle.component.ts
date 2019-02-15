import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../../models/owner';

@Component({
  selector: 'app-owners-detalle',
  templateUrl: './owners-detalle.component.html',
  styleUrls: ['./owners-detalle.component.css']
})
export class OwnersDetalleComponent implements OnInit {
@Input() detalle: Owner;
  constructor() { }

  ngOnInit() {
  }

}

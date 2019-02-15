import { Component, OnInit } from '@angular/core';
import {Vet} from '../../models/vet';
import {VetService} from '../../services/vet.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  public vets: Array<Vet>;

  // public owners :Owner[];
  constructor(private servicioAjax: VetService) {
    servicioAjax.getVets().subscribe(datos => {
      this.vets = datos;
      console.log(this.vets);
    });
  }

  ngOnInit() {
  }

}

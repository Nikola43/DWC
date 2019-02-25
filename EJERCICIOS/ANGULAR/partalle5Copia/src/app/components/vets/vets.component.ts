import { Component, OnInit } from '@angular/core';
import {Vet} from '../../models/vet';
import {VetService} from '../../services/vet.service';
import {Owner} from '../../models/owner';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  public vets: Array<Vet>;

  // public owners :Owner[];
  constructor(private vetService: VetService, private route: ActivatedRoute, private router: Router) {
    vetService.getVets().subscribe(datos => {
      this.vets = datos;
      console.log(this.vets);
    });
  }

  ngOnInit() {
  }
  del(vet: Vet) {
    console.log(vet);
    // alert('aqui borramos');
    const msg = '¿Estas seguro nque quieres borrar a :?' + vet.firstName + ' ' + vet.lastName;
    if (confirm(msg)) {
      this.vetService.delVetList(vet.id).subscribe(datos => {
        this.vets = datos;
        console.log(this.vets);
      });
    }
  }
// modificamos
  upd(vetId) {
    console.log('vets id' + vetId);
    // alert('aqui modificamos');
    // navegando con parametro
    this.router.navigate(['/vets-add', vetId]);
    this.vetService.updVet(vetId).subscribe(datos => {
      this.vets = datos;
      console.log(this.vets);
    });
  }
}

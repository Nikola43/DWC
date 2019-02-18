import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../../models/owner';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnersService} from '../../services/owners.service';

@Component({
  selector: 'app-owners-detalle',
  templateUrl: './owners-detalle.component.html',
  styleUrls: ['./owners-detalle.component.css']
})
export class OwnersDetalleComponent implements OnInit {
  owner: Owner;
// ponemos el servivicio y el route / ActivatedRoute:nos permite obtener el parametro
  constructor(private route: ActivatedRoute, private ownerService: OwnersService) {
    // creamos un objeto de tipo owner vacio.
  this.owner = <Owner>{};
}

  ngOnInit() {
    // Peticion Ajax
    const  ownerId = this.route.snapshot.params['id'];
    this.ownerService.getOwnerPorId(ownerId).subscribe(daticos =>
      this.owner = daticos);
    console.log(this.owner);
  }
}

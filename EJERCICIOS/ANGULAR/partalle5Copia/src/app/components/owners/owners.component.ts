import {Component, OnInit} from '@angular/core';
import {OwnersService} from '../../services/owners.service';
import {Owner} from '../../models/owner';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  public owners: Array<Owner>;

  // public owners :Owner[];
  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnersService) {
    ownerService.getOwners().subscribe(datos => {
      this.owners = datos;
      console.log(this.owners);
    });
  }

  ngOnInit() {
  }


  onSelect(p: Owner) {
    this.router.navigate(['/owners', p.id]);
  }
// funcion del html del ownwer para borrar Y ME DEVUELVE LA LISTA
  del(owner: Owner) {
    console.log(owner);
    // alert('aqui borramos');
    const msg = '¿Estas seguro nque quieres borrar a :?' + owner.firstName + ' ' + owner.lastName;
    if (confirm(msg)) {
      this.ownerService.delOwnerList(owner.id).subscribe(datos => {
        this.owners = datos;
        console.log(this.owners);
      });
    }
  }
// modificamos
  upd(owner) {
    console.log('owner id' + owner.id);
    this.router.navigate(['/owners-add', owner.id]);
    this.ownerService.updOwner(owner).subscribe(datos => {
      this.owners = datos;
      console.log(this.owners);
    });
  }
}

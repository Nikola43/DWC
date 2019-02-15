import {Component, OnInit} from '@angular/core';
import {OwnersService} from '../../services/owners.service';
import {Owner} from '../../models/owner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  public owners: Array<Owner>;
  public router: Router;

  // public owners :Owner[];
  constructor(private servicioAjax: OwnersService) {
    servicioAjax.getOwners().subscribe(datos => {
      this.owners = datos;
      console.log(this.owners);
    });
  }

  ngOnInit() {
  }

}

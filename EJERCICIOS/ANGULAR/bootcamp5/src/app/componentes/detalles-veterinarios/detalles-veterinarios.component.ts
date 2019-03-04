import { Component, OnInit } from '@angular/core';
import {Veterinario} from '../../clases/veterinario';
import {ActivatedRoute, Router} from '@angular/router';
import {VeterinariosService} from '../../servicios/veterinarios.service';

@Component({
  selector: 'app-detalles-veterinarios',
  templateUrl: './detalles-veterinarios.component.html',
  styleUrls: ['./detalles-veterinarios.component.css']
})
export class DetallesVeterinariosComponent implements OnInit {
  public veterinario: Veterinario;
  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinariosService) {
    this.veterinario = new Veterinario();
  }

  ngOnInit() {
    const veterinarioId = this.route.snapshot.params['id'];
    this.veterinarioService.getVeterinarioPorId(veterinarioId).subscribe(data => this.veterinario = data);
  }

  eliminarVeterinario(veterinarioId: number) {
    // console.log('eliminamos veterinario');
    // console.log('id veterinario -> ' + veterinarioId);
    if (confirm('Esta seguro de que quiere eliminar al veterinario?' + veterinarioId)) {
      this.veterinarioService.eliminarVeterinario(veterinarioId).subscribe(data => {
        console.log('Respuesta servidor');
        console.log(data);
        if (data.result === 'OK') {
          this.router.navigate(['/veterinarios']);
        } else {
          alert('No se pudo borrar el veterinario');
        }
      });
    }
  }

}

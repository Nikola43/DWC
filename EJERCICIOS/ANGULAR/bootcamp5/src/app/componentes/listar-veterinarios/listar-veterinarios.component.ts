import {Component, OnInit} from '@angular/core';
import {Veterinario} from '../../clases/veterinario';
import {Router} from '@angular/router';
import {VeterinariosService} from '../../servicios/veterinarios.service';

@Component({
  selector: 'app-listar-veterinarios',
  templateUrl: './listar-veterinarios.component.html',
  styleUrls: ['./listar-veterinarios.component.css']
})
export class ListarVeterinariosComponent implements OnInit {
// array donde almacenaremos la lista de Veterinarios
  public listaVeterinarios: Array<Veterinario>;

  constructor(private router: Router, private servicioVeterinarios: VeterinariosService) {
    this.servicioVeterinarios.getListaVeterinarios().subscribe(data => {
      this.listaVeterinarios = data;
    });
  }

  ngOnInit() {
  }

  eliminarVeterinario(veterinarioId: number) {
    // console.log('eliminamos Veterinario');
    // console.log('id Veterinario -> ' + VeterinarioId);
    if (confirm('Esta seguro de que quiere eliminar al Veterinario?' + veterinarioId)) {
      this.servicioVeterinarios.eliminarVeterinario(veterinarioId).subscribe(data => {
        if (data.result === 'OK') {
          this.listaVeterinarios = this.listaVeterinarios.filter(tipo => tipo.id !== veterinarioId);
        } else {
          alert('No se ha podido eliminar veterinario');
        }
        console.log('respuesta servidor');
        console.log(data);
      });
    }
  }

  modificarVeterinario(veterinarioId: number) {
    // console.log('modificar Veterinario');
    // console.log('id Veterinario -> ' + VeterinarioId);
    this.router.navigate(['veterinarios-add', veterinarioId]);
  }
}

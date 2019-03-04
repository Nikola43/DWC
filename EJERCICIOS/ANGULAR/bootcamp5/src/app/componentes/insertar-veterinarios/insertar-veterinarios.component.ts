import { Component, OnInit } from '@angular/core';
import {Veterinario} from '../../clases/veterinario';
import {VeterinariosService} from '../../servicios/veterinarios.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-insertar-veterinarios',
  templateUrl: './insertar-veterinarios.component.html',
  styleUrls: ['./insertar-veterinarios.component.css']
})
export class InsertarVeterinariosComponent implements OnInit {
  public veterinario: Veterinario;
  public textoBoton: string;

  constructor(private veterinarioService: VeterinariosService, private router: Router, private route: ActivatedRoute) {
    this.veterinario = new Veterinario();
    this.textoBoton = 'Añadir Veterinario';
  }

  ngOnInit() {
    const veterinarioId = this.route.snapshot.params['id'];
    if (veterinarioId !== '-1') {
      this.textoBoton = 'Modificar Veterinario';
      this.veterinarioService.getVeterinarioPorId(veterinarioId).subscribe(data => {
        this.veterinario = data;
      });
    }
  }

  onSubmit(veterinario: Veterinario) {
    // MODIFICA
    if (this.veterinario.id) {
      veterinario.id = this.veterinario.id;
      this.veterinarioService.modificarVeterinario(veterinario).subscribe(data => {
          this.router.navigate(['/veterinarios']);
        },
        error => console.log(error)
      );
    } else {
      // INSERTA
      this.veterinarioService.insertarVeterinario(veterinario).subscribe(data => {
          if (data.result === 'OK') {
            alert('Veterinario añadido correctamente');
            this.router.navigate(['/veterinarios']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log(error)
      );
    }
  }
}

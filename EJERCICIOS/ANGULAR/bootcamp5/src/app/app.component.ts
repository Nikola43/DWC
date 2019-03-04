import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamptallerangular5';

  public navBar = {
    isNavbarCollapsed: true,
    propietarios: {
      dropdown: true
    },
    vets: {
      dropdown: true
    }
  };
}

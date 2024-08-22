import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GastosListComponent } from "./gastos-list/gastos-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GastosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cuentas';
 
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDialogModule, MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, MatButtonModule, MatDialogModule, MatDialogContent, MatDialogTitle, MatInputModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  postData = { descripcion: '', cantidad: '' };  // Datos que se enviarán en el POST

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
  ) {}

  //Método para añadir un nuevo gasto
  añadirGasto() {
    const url = 'http://localhost:4200'
  }
}


import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDialogModule, MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, MatButtonModule, MatDialogModule, MatDialogContent, MatDialogTitle, MatInputModule,FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  descripcion: string | undefined;
  cantidad: number | undefined;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  //Método para añadir un nuevo gasto y cerrar el modal
  addGasto() {
    const nuevoGasto = {
      descripcion: this.descripcion,
      cantidad: this.cantidad
    };

    // Enviar los datos al componente padre y cerrar el modal
    this.dialogRef.close(nuevoGasto);
  }

  // Método para cerrar el modal sin enviar datos
  close() {
    this.dialogRef.close();

  }
}

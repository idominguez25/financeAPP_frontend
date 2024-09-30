import { Component, Inject } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDialogModule, MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, MatButtonModule, MatDialogModule, MatDialogContent, MatDialogTitle, MatInputModule,FormsModule],
  templateUrl: './editar-dialog.component.html',
  styleUrl: '../dialog/dialog.component.css'
})
export class EditarDialogComponent {
  descripcion: string | undefined
  cantidad: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe el dato actual del elemento a editar
  ){
     // Abrir el modal e inicializarlo con los datos actuales del elemento
    this.descripcion = data.descripcion;
    this.cantidad = data.cantidad;
  }

  // Método para guardar los cambios
  save() {
    const gastoModificado = {
      descripcion: this.descripcion,
      cantidad: this.cantidad
    };
    this.dialogRef.close(gastoModificado); // Devuelve el valor modificado
  }

  // Método para cerrar el modal sin guardar
  close() {
    this.dialogRef.close();
  }
}


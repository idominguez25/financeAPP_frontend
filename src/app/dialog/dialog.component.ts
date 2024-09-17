import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDialogModule, MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, MatButtonModule, MatDialogModule, MatDialogContent, MatDialogTitle, MatInputModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public fb: FormBuilder
  ) { }

  //Método para añadir un nuevo gasto
  añadirGasto() {
    const url = 'http://localhost:4200'
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

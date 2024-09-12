import { Component, Input, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app.component";
import {MatTableModule} from '@angular/material/table';
import { Gasto } from '../modelo/gasto';
import { CuentasService } from '../servicio/cuentas.service';
import { MatButton } from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-gastos-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, AppComponent, MatTableModule, MatButton, MatIcon],
  templateUrl: './gastos-list.component.html',
  styleUrl: './gastos-list.component.css'
})
//usa el servicio para obtener y mostrar las tareas
export class GastosListComponent implements OnInit{
  //Variables
  gastos: Gasto[] = []
  displayedColumns: string[] = ['nombre', 'cantidad', 'acciones'];
  dataSource = this.gastos;

  constructor(private cuentasService: CuentasService, private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.cuentasService.listaGastos().subscribe(
      data => {
       this.gastos = data;
       this.dataSource = this.gastos;
      },
      error => {
        console.error('Error al cargar los gastos', error);
      });;
      
  }

  abrirDialog(): void{
      const dialogRef = this.dialog.open(DialogComponent);
  }
  
}


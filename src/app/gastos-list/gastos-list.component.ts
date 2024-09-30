import { Component, Input, OnInit} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app.component";
import {MatTableModule} from '@angular/material/table';
import { Gasto } from '../modelo/gasto';
import { CuentasService } from '../servicio/cuentas.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';



@Component({
  selector: 'app-gastos-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, AppComponent, MatTableModule, MatButton, MatIcon, MatButtonModule],
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

      dialogRef.afterClosed().subscribe( data => {
          if (data) {
          // Llamamos al servicio para añadir el nuevo ítem a la tabla
          this.cuentasService.añadirGasto(data).subscribe(() => {
            // Actualizar la lista de items después de añadir el nuevo item
            this.ngOnInit();
          });
        }
      }
    );  
  }

  //Método para editar un gasto
  editarGastoDialog(gasto: any){
    const dialogRefEdit = this.dialog.open(EditarDialogComponent, {
      panelClass: 'formDialog',
      data: {...gasto}
    });

    dialogRefEdit.afterClosed().subscribe( data => {
        this.cuentasService.modificarGasto(gasto.descripcion, data).subscribe(() => {

          // Actualizar la lista de items después de añadir el nuevo item
          this.ngOnInit();
        })});
  
}

//Método para eliminar un gasto
eliminarGasto(gastoEliminado: Gasto) {
  this.cuentasService.eliminarGasto(gastoEliminado.descripcion).subscribe(() => {

    // Actualizar la lista de items después de eliminar el gasto
    this.ngOnInit();
  });

}

}
  


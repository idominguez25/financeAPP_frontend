import { Component, OnInit} from '@angular/core';
import { Gasto } from '../modelo/gasto';
import { CuentasService } from '../servicio/cuentas.service';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app.component";


@Component({
  selector: 'app-gastos-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, AppComponent],
  templateUrl: './gastos-list.component.html',
  styleUrl: './gastos-list.component.css'
})
//usa el servicio para obtener y mostrar las tareas
export class GastosListComponent implements OnInit{
  gastos: Gasto[] = [];
  sueldo!: number;
  dineroRestante: number = 0;
  sumaGastos: number = 0;
  dineroCaprichos: number = 0;
  ahorro: number = 0;
  mostrarLista: boolean = false;
  mostrarResultados: boolean = false;

  constructor(private cuentasService: CuentasService) {}

  ngOnInit(): void {
    this.cuentasService.listaGastos().subscribe(
      data => {
       this.gastos = data
      });;
  }
  //Método para mostrar los resultados
  calcularResultados(): void {
    this.mostrarResultados = true;

    //Calcula la suma de todos los gastos
    this.calcularSumaGastos();

    //Calcula el dinero restante
    this.dineroRestante = this.sueldo - this.sumaGastos;

    //Calcula el dinero para caprichos
    this.dineroCaprichos = (this.dineroRestante * 30) / 100;

    //Calcula el total de ahorro
    this.ahorro = this.dineroRestante - this.dineroCaprichos;
  }

  //Método para mostrar los gastos
  mostrarGastos(): Gasto[] {
    this.mostrarLista = true;
    return this.gastos;
  }

  //Método para sumar el total de gastos
  calcularSumaGastos(): void {
    this.sumaGastos = this.gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
  }

  //Método para añadir un nuevo gasto
  anadirGasto(): void {

  }
}


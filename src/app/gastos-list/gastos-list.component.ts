import { Component, OnInit } from '@angular/core';
import { Gasto } from '../modelo/gasto';
import { CuentasService } from '../servicio/cuentas.service';

@Component({
  selector: 'app-gastos-list',
  standalone: true,
  imports: [],
  templateUrl: './gastos-list.component.html',
  styleUrl: './gastos-list.component.css'
})
//usa el servicio para obtener y mostrar las tareas
export class GastosListComponent implements OnInit{
  gastos: Gasto[] = [];

  constructor(private cuentasService: CuentasService) { }

  ngOnInit(): void {
    this.cuentasService.listaGastos().subscribe(
      (data) => {
        this.gastos = data;
      });
  }
}

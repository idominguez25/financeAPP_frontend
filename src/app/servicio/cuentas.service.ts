import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../modelo/gasto';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  //Endpoint del Backend
  private backendURL = "http://localhost:8090/cuentas/gastos";

  constructor( 
     //HttpClient para proporcionar métodos que reciben datos del backend
     private httpClient: HttpClient) {} 

	//Método para listar todos los gastos
  listaGastos(): Observable<Gasto[]> {
    return this.httpClient.get<Gasto[]>(`${this.backendURL}/verTodo`);
  }

  //Método para buscar un gasto en concreto
  findByName(descripcion: string): Observable<Gasto>{
    return this.httpClient.get<Gasto>(`${this.backendURL}/buscar`)
  }

  //Método para añadir un nuevo gasto
  añadirGasto(nuevoGasto: Gasto): Observable<any> {
    return this.httpClient.post(`${this.backendURL}/añadir`, nuevoGasto)
  }
}

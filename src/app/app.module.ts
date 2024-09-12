import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GastosListComponent } from './gastos-list/gastos-list.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,FormsModule, NgIf,
    AppRoutingModule,
    CommonModule, RouterModule, MatButtonModule, 
    MatFormFieldModule, MatInputModule,
    MatButtonModule, MatDialogModule
  ],
  providers: [provideHttpClient()],
  bootstrap: []
})
export class AppModule { }

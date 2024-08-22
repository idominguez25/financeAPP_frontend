import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,FormsModule, NgIf,
    /* RouterOutlet, */
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: []
})
export class AppModule { }

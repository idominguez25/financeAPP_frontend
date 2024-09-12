import { RouterModule, Routes } from '@angular/router';
import { GastosListComponent } from './gastos-list/gastos-list.component';
import { SueldoComponent } from './sueldo/sueldo.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'gastos-list', component: GastosListComponent },
    { path: 'inicio', component: SueldoComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })

export class AppRoutingModule {}
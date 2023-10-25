import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
 { path: '', redirectTo: '/inicio', pathMatch: 'full' },
 { path: 'inicio', component: InicioComponent },
 { path: 'cursos', component: CursosComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
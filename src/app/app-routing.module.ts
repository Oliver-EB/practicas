import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bodyComponent } from './components/body/mensaje.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { MateriasComponent } from './components/materias/materias.component';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';

const ROUTES : Routes = [
  {path: 'home', component:bodyComponent},
  {path: 'directivas', component:NombreComponenteComponent},
  {path: 'materias', component:MateriasComponent},

  {path: '', redirectTo : 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

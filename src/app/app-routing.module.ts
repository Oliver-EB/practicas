import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bodyComponent } from './components/body/mensaje.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { MateriasComponent } from './components/materias/materias.component';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
const ROUTES : Routes = [
  {path: 'home', component:bodyComponent},
  {path: 'directivas', component:NombreComponenteComponent},
  {path: 'materias', component:MateriasComponent},
  { path: 'paises',component: PaisesComponent },
  { path: 'pais/:id',  component: PaisDetalleComponent},
  {path: '', redirectTo : 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

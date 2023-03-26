import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Agrega esta importación

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { navMain } from './components/menu.component';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    navMain,
    MateriasComponent,
    MateriaComponent,
    NombreComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MateriasService],
  bootstrap: [AppComponent,navMain]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Agrega esta importación
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { navMain } from './components/menu.component';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisTarjetaComponent } from './components/pais-tarjeta/pais-tarjeta.component';
import { PaisesService } from './services/paises.service';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    navMain,
    MateriasComponent,
    MateriaComponent,
    NombreComponenteComponent,
    PaisesComponent,
    PaisTarjetaComponent,
    PaisDetalleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [MateriasService, PaisesService],
  bootstrap: [AppComponent,navMain]
})
export class AppModule { }

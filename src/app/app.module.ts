import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { navMain } from './components/menu.component';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    navMain,
    MateriasComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MateriasService],
  bootstrap: [AppComponent,navMain]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Materia } from 'src/app/interfaces/Materias';
import { MateriasService } from 'src/app/services/materias.service';
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  semestreSeleccionado: number = 1;
  materias : Materia []= [];
  
  constructor(
    private _materiasService: MateriasService
  ){
    this.materias = this._materiasService.getMaterias();
  }
}

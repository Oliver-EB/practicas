import { Injectable } from '@angular/core';
import { Materia } from '../interfaces/Materias';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private materias : Materia []= [
    {
      cuatrimestre : 1,
      materias:'Fundamentos de ti, matematicas , español',
      fecha : "23/12/12",
      imagen: ""
    },
    {
      cuatrimestre : 2,
      materias:'Fundamentos de ti, matematicas , español',
      fecha : "23/12/12",
      imagen: ""
    },
    {
      cuatrimestre : 4,
      materias:'Fundamentos de ti, matematicas , español, Historia',
      fecha : "23/12/12",
      imagen: ""
    },
    {
      cuatrimestre : 5,
      materias:'Fundamentos de ti, matematicas , español , geografia',
      fecha : "23/12/12",
      imagen: ""
    }
    
  ]
  getMaterias (): Materia[]{
    return this.materias;
   }
   constructor() { 
    
  }
}
 

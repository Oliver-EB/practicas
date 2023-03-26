import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit{
  mostrarMensaje = false;
  contador = 1;
  materias: string []= [
    'materia ',
    'materia 1',
    'materia 2',
    'materia 3',
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
}

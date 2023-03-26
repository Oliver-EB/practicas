import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent {
  nombre: string = '';
  correo: string = '';
  dos: string = '';
  tres: string= '';
  cuatro: string = '';
  cinco: string = '';

  enviado: boolean = false;

  onSubmit(formulario: any) {
    if (formulario.valid) {
      this.enviado = true;
      console.log(formulario.controls.nombre.value);
      console.log(formulario.controls.correo.value);
      console.log(formulario.controls.dos.value);
      console.log(formulario.controls.tres.value);
      console.log(formulario.controls.cuatro.value);
      console.log(formulario.controls.cinco.value);
      // Accede al valor del input a través de la propiedad 'nombre' del componente
      // Aquí puedes enviar los datos del formulario al servidor
    }
  }
}

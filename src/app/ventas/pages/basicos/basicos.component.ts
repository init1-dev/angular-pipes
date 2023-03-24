import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreLower: string = 'jorge';
  nombreUpper: string = 'JORGE';
  nombreCompleto: string = 'jOrGe gUilLEn  ';

  fecha: Date = new Date; // La fecha de hoy

}
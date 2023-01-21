import { Component, Input } from '@angular/core';
import { Aplicacion } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.scss'],
})
export class AplicacionComponent {
  
  @Input() aplicacion!: Aplicacion;

  constructor() { }

  goApp() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CalificarService } from 'src/app/services/calificar.service';
import { LenguajeService } from 'src/app/services/lenguaje.service';

@Component({
  selector: 'app-item-idioma',
  templateUrl: './item-idioma.component.html',
  styleUrls: ['./item-idioma.component.scss'],
})
export class ItemIdiomaComponent {

  @Input() img!: string;
  @Input() label!: string;
  @Input() idioma!: string;
  
  constructor(
    private lenguajeService: LenguajeService,
    private calificarService: CalificarService,
  ) {}


  selectIdioma() {
    this.lenguajeService.selecionarIdioma(this.idioma);
    this.calificarService.getOpcionesCalificar();
  }

}

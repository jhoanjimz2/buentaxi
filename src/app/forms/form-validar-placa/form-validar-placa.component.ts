import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-validar-placa',
  templateUrl: './form-validar-placa.component.html',
  styleUrls: ['./form-validar-placa.component.scss'],
})
export class FormValidarPlacaComponent {
  @Output() btnValidar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  validar() {
    this.btnValidar.emit();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-calificar',
  templateUrl: './form-calificar.component.html',
  styleUrls: ['./form-calificar.component.scss'],
})
export class FormCalificarComponent {
  @Output() btnConfirm: EventEmitter<any> = new EventEmitter();
  constructor() { }

  confirm() {
    this.btnConfirm.emit();
  }

}

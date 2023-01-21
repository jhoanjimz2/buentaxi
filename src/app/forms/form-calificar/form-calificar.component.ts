import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-calificar',
  templateUrl: './form-calificar.component.html',
  styleUrls: ['./form-calificar.component.scss'],
})
export class FormCalificarComponent {
  @Input() cal: any;
  @Output() btnConfirm: EventEmitter<any> = new EventEmitter();

  formulario: FormGroup = this.fb.group({
    email: new FormControl('', [ Validators.required, Validators.email ] ),
    nombre: new FormControl('', [ Validators.required ] ),
    telefono: new FormControl('', [ Validators.required ] )
  });

  constructor(
    private fb: FormBuilder
  ) { }

  confirm() {
    this.btnConfirm.emit(
      this.formulario
    );
  }

}

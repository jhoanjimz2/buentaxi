import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/core/components';

@Component({
  selector: 'app-form-validar-placa',
  templateUrl: './form-validar-placa.component.html',
  styleUrls: ['./form-validar-placa.component.scss'],
})
export class FormValidarPlacaComponent {
  @Output() btnValidar: EventEmitter<any> = new EventEmitter();

  formulario: FormGroup = this.fb.group({
    placa: new FormControl(
      '', 
      [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
        Validators.pattern(/^[a-zA-Z]{3}[0-9]{3}$/)
      ],
    )
  });

  constructor(
    private fb: FormBuilder
  ) { }

  validar() {
    this.btnValidar.emit({ placa: this.formulario.controls["placa"].value});
  }

}

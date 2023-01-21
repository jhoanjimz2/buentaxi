import { Component, Input } from '@angular/core';
import { CallNumber } from 'capacitor-call-number';
import { Telefono } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.scss'],
})
export class TelefonoComponent {

  @Input() telefono!: Telefono;

  constructor() { }

  async llamar() {
    await CallNumber.call(
      { 
        number: this.telefono.telefono,
        bypassAppChooser: false
      }
    );
  }

}

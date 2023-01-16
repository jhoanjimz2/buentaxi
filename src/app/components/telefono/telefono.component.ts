import { Component, Input, OnInit } from '@angular/core';
import { Telefono } from 'src/app/interfaces/telefono.interface';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.scss'],
})
export class TelefonoComponent {

  @Input() telefono!: Telefono;

  constructor(private callNumber: CallNumber) { }

  llamar() {
    this.callNumber.callNumber(this.telefono.telefono, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}

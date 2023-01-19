import { Component, Input } from '@angular/core';
import { OpcionCalificar } from 'src/app/interfaces/calificar.interface';

@Component({
  selector: 'app-item-radio',
  templateUrl: './item-radio.component.html',
  styleUrls: ['./item-radio.component.scss'],
})
export class ItemRadioComponent {
  @Input() opcion!: OpcionCalificar;

}

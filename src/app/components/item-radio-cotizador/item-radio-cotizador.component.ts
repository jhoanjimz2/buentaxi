import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-radio-cotizador',
  templateUrl: './item-radio-cotizador.component.html',
  styleUrls: ['./item-radio-cotizador.component.scss'],
})
export class ItemRadioCotizadorComponent {
  @Input() label!: string;
  @Input() item!: any;

  check(val: boolean) {
    var elementIn = document.getElementById(`in${this.item.id}`);
    var elementOut = document.getElementById(`out${this.item.id}`);
    this.item.valid = val;
    if (this.item.valid) {
      elementOut!.className = 'in';
      elementIn!.className = 'out';
    } else {
      elementIn!.className = 'in';
      elementOut!.className = 'out';
    }
  }

}

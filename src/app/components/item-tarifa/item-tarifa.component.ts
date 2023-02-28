import { Component, Input } from '@angular/core';
import { ItemTarifa } from '../../interfaces/interfaces';

@Component({
  selector: 'app-item-tarifa',
  templateUrl: './item-tarifa.component.html',
  styleUrls: ['./item-tarifa.component.scss'],
})
export class ItemTarifaComponent {
  @Input() tarifa!: ItemTarifa;
}

import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ModalsService } from 'src/app/services/modals.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { ItemTarifa } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss'],
})
export class TarifasComponent {
  @ViewChild(IonModal) modal!: IonModal;

  tarifas: ItemTarifa[] = [
    { icono: 'carreraminima.png', comentario: 'CARRERAMINIMA', precio: 7000 },
    { icono: 'caidamts.png', comentario: 'CAIDA120', precio: 99 },
    { icono: 'caidaseg.png', comentario: 'CAIDA60', precio: 99 },
    { icono: 'nocturno.png', comentario: 'RECARGONOCTURNO', precio: 1150 },
    { icono: 'festivo.png', comentario: 'RECARGOFESTIVO', precio: 1150 },
    { icono: 'dominical.png', comentario: 'RECARGODOMINICAL', precio: 1150 },
    { icono: 'llamada.png', comentario: 'RECARGOLLAMADA', precio: 350 }
  ]

  constructor(
    public modalsService: ModalsService
  ) {}

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
  cancel() {
    this.modal.dismiss(null);
    this.modalsService.modalTarifas = false;
  }

}

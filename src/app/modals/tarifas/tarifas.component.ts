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
    { icono: 'carreraminima.png', comentario: 'CARRERAMINIMA', precio: 7000, span: '' },
    { icono: 'caidamts.png', comentario: 'CAIDA120', precio: 99, span: '' },
    { icono: 'caidaseg.png', comentario: 'CAIDA60', precio: 99, span: '' },
    { icono: 'nocturno.png', comentario: 'RECARGONOCTURNO', precio: 1150, span: 'HORAS' },
    { icono: 'dominical.png', comentario: 'RECARGOFESTIVOYDOMINICAL', precio: 1150, span: '' },
    { icono: 'terminal.svg', comentario: 'RECARGOSALIDATERMINAL', precio: 1150, span: '' },
    { icono: 'aeropuerto.svg', comentario: 'RECARGOSALIDAAEROPUERTO', precio: 4550, span: '' },
    { icono: 'moteles.svg', comentario: 'RECARGOMOTELES', precio: 4550, span: '' },
    { icono: 'llamada.png', comentario: 'RECARGOLLAMADA', precio: 350, span: '' },
    { icono: 'hora.svg', comentario: 'VALORDEHORACONTRATADA', precio: 32650, span: '' }
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

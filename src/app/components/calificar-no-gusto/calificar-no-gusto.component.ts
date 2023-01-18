import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { OpcionCalificar } from 'src/app/interfaces/calificar.interface';
import { CalificarService } from 'src/app/services/calificar.service';

@Component({
  selector: 'app-calificar-no-gusto',
  templateUrl: './calificar-no-gusto.component.html',
  styleUrls: ['./calificar-no-gusto.component.scss'],
})
export class CalificarNoGustoComponent {
  @ViewChild(IonModal) modal!: IonModal;

  name: string = 'calificar';
  nogusto!: OpcionCalificar[];

  constructor(
    private calificarService: CalificarService
  ) {
    this.nogusto = this.calificarService.nogusto;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

}

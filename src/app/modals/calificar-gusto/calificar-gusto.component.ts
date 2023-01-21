import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { OpcionCalificar } from 'src/app/interfaces/interfaces';
import { CalificarService } from 'src/app/services/calificar.service';

@Component({
  selector: 'app-calificar-gusto',
  templateUrl: './calificar-gusto.component.html',
  styleUrls: ['./calificar-gusto.component.scss'],
})
export class CalificarGustoComponent {
  @ViewChild(IonModal) modal!: IonModal;

  name: string = 'calificar';
  gusto!: OpcionCalificar[];
  cal = {
    calificacion: "1"
  }

  constructor(
    private calificarService: CalificarService
  ) {
    this.gusto = this.calificarService.gusto;
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

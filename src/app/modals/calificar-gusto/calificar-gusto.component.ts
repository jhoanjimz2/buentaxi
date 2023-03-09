import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { OpcionCalificar, Calificacion, PerfilTaxista } from 'src/app/interfaces/interfaces';
import { CalificarService } from 'src/app/services/calificar.service';
import { ModalsService } from 'src/app/services/modals.service';
import { Device } from '@capacitor/device';
import { AlertsService } from '../../services/alerts.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calificar-gusto',
  templateUrl: './calificar-gusto.component.html',
  styleUrls: ['./calificar-gusto.component.scss'],
})
export class CalificarGustoComponent {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() idVinculacion = { idVinculacion: 0 };
  @Input() taxistas!: PerfilTaxista[];
  calificacion: Calificacion = new Calificacion();
  recomend: boolean = false;

  gusto: OpcionCalificar[] = this.calificarService.gusto;

  logInfo = async () => await Device.getInfo();
  logId = async () => await Device.getId();

  constructor(
    private calificarService: CalificarService,
    public modalsService: ModalsService,
    private alertsService: AlertsService,
    private translate: TranslateService
  ) {
    this.setInfo();
  }

  setInfo() {
    this.logId().then((data: any) => this.calificacion.uuid = data.uuid);
    this.logInfo().then((data: any) => {
      this.calificacion.esVirtual    = data.isVirtual;
      this.calificacion.modelo       = data.model;
      this.calificacion.version      = data.osVersion;
      this.calificacion.plataforma   = data.platform;
      this.calificacion.manufacturer = data.manufacturer;
    });
  }

  cancel() {
    this.modal.dismiss(null);
    this.modalsService.modalLike = false;
  }

  confirm(event: any) {
    this.alertsService.initLoading();
    this.calificacion.correoTelefonoUsuario = event.value.email;
    this.calificacion.nombre                = event.value.nombre;
    this.calificacion.telefono              = event.value.telefono;
    this.calificacion.buenServicio          = 1;
    this.calificacion.idVinculacion         = this.idVinculacion.idVinculacion;
    this.calificacion.fechaRegistro         = new Date();
    this.calificarService.addCalificacion(this.calificacion).subscribe({
      next: (data: any) => {
        if (data.estado) {
          this.modalsService.modalLike = false;
          this.alertsService.finishLoading();
          let msg = ''
          this.translate.get('TUSOLICITUD').subscribe(value => { msg = value; });
          this.alertsService.toastAlert(msg)
          this.actualizar();
        } else {
          this.modalsService.modalLike = false;
          this.alertsService.finishLoading();
          let msg = ''
          this.translate.get('EN24HORAS').subscribe(value => { msg = value; });
          this.alertsService.toastAlert(msg)
        }
      },
      error: () => {
        this.alertsService.finishLoading();
        let msg = ''
        this.translate.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
        this.alertsService.toastAlert(msg)
      }
    })
  }

  onWillDismiss(event: Event) {
    this.recomend = false;
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
  actualizar() {
    let taxista = this.taxistas.find(element => element.idVinculacion == this.idVinculacion.idVinculacion);
    taxista!.GoodComment = 1;
    taxista!.positivos += 1;
  }

}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PerfilTaxista } from 'src/app/interfaces/interfaces';
import { NuevoViajeService } from 'src/app/services/nuevo-viaje.service';
import { Device } from '@capacitor/device';
import { MyDevice } from '../../interfaces/interfaces';
import { AlertsService } from '../../services/alerts.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage {

  logInfo = async () => await Device.getInfo();
  logId = async () => await Device.getId();

  myDevice: MyDevice =  new MyDevice();

  constructor(
    private nuevoViajeService: NuevoViajeService,
    private navController: NavController,
    private alertsService: AlertsService,
    private translate: TranslateService
  ) {
    this.logId().then((data: any) => this.myDevice.uuid = data.uuid);
    this.logInfo().then((data: any) => {
      this.myDevice.esVirtual     = data.isVirtual;
      this.myDevice.modelo        = data.model;
      this.myDevice.version       = data.osVersion;
      this.myDevice.plataforma    = data.platform;
      this.myDevice.manufacturer  = data.manufacturer;
    });
  }

  validar(event: any) {
    this.alertsService.initLoading();
    this.myDevice.placa = event.placa.toUpperCase();
    this.nuevoViajeService.verificarPlaca(this.myDevice).subscribe({
      next: (data: PerfilTaxista[]) => {
        this.alertsService.finishLoading();
        if (data.length) {
          this.nuevoViajeService.taxistas = data;
          this.navController.navigateForward('/pages/perfil-taxi');
        } else {
          let msg = '';
          this.translate.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
          this.alertsService.toastAlert(msg);
        }
      }, error: (error) => {
        this.alertsService.finishLoading();
        let msg = '';
        this.translate.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
        this.alertsService.toastAlert(msg);
      }
    })
  }

}

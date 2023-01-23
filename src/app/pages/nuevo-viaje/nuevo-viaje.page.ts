import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PerfilTaxista } from 'src/app/interfaces/interfaces';
import { NuevoViajeService } from 'src/app/services/nuevo-viaje.service';
import { Device } from '@capacitor/device';
import { MyDevice } from '../../interfaces/interfaces';

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
  ) {
    
    this.logId().then((data: any) => this.myDevice.uuid = data.uuid);

    console.log(this.myDevice.uuid);

    this.logInfo().then((data: any) => {
      this.myDevice.esVirtual  = data.isVirtual;
      this.myDevice.modelo     = data.model;
      this.myDevice.version    = data.osVersion;
      this.myDevice.plataforma = data.platform;
      this.myDevice.manufacturer = data.manufacturer;
    })
  }

  validar(event: any) {
    this.myDevice.placa = event.placa;
    this.nuevoViajeService.verificarPlaca(this.myDevice).subscribe((data: any) => {
      this.nuevoViajeService.perfilTaxista = data;
      this.navController.navigateForward('/pages/perfil-conductor');
    }, error => {
      console.log(error);
    })
  }

}

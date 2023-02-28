import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

import { CalificarService } from './services/calificar.service';
import { LenguajeService } from './services/lenguaje.service';
import { ModalsService } from './services/modals.service';
import { Router } from '@angular/router';
import { MapaService } from './services/mapa.service';
import { Network } from '@capacitor/network';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private calificarService: CalificarService,
    private lenguajeService: LenguajeService,
    private modalService: ModalsService,
    private mapaService: MapaService,
    private navCtrl: NavController,
    private alertsService: AlertsService,
    private router: Router
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      this.back();
      this.router.navigate(["/pages/tabs/nuevo-viaje"]);
      await SplashScreen.show({ showDuration: 3000, autoHide: true });
      this.cargarServicios();
      Network.addListener('networkStatusChange', status => {
        if (status.connected) this.net();
        else if (this.alertsService.net) this.noNet();
      });
    });
  }
  net() { this.cargarServicios(); this.alertsService.finishLoadingN(); }
  noNet() { this.alertsService.initLoadingN();  }
  cargarServicios() {
    this.lenguajeService.inicializarArchivos();
    this.lenguajeService.setearIdiomaInicial();
    this.calificarService.getOpcionesCalificar();
    this.mapaService.getPoligonos();
  }
  back() {
    this.platform.backButton.subscribeWithPriority(10,() => {
      if (this.modalService.modalCompartir) this.modalService.modalCompartir = false;
      else if (this.modalService.modalLike) this.modalService.modalLike = false;
      else if (this.modalService.modalDisLike) this.modalService.modalDisLike = false;
      else if (this.modalService.modalTarifas) this.modalService.modalTarifas = false;
      else this.navCtrl.back();
    });
  }

}

import { Component } from '@angular/core';
import { LenguajeService } from './services/lenguaje.service';
import { Network } from '@capacitor/network';
import { AlertsService } from './services/alerts.service';
import { ModalsService } from './services/modals.service';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CalificarService } from './services/calificar.service';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private lenguajeService: LenguajeService,
    private alertsService: AlertsService,
    private platform: Platform,
    private modalService: ModalsService,
    private navCtrl: NavController,
    private router: Router,
    private calificarService: CalificarService
  ) {
    this.initializeApp();
  }
  async initializeApp() {
    await SplashScreen.show({ showDuration: 3000, autoHide: true });
    this.cargarServicios();
    this.internet();
    this.back();
    this.router.navigate(["/pages/tabs/nuevo-viaje"]);
  }
  back() {
    this.platform.backButton.subscribeWithPriority(10,() => {
      this.alertsService.finishLoading();
      if (this.modalService.modalCompartir) this.modalService.modalCompartir = false;
      else if (this.modalService.modalLike) this.modalService.modalLike = false;
      else if (this.modalService.modalDisLike) this.modalService.modalDisLike = false;
      else if (this.modalService.modalTarifas) this.modalService.modalTarifas = false;
      else this.navCtrl.back();
    });
  }
  cargarServicios() {
    this.lenguajeService.inicializarArchivos();
    this.lenguajeService.setearIdiomaInicial();
    this.calificarService.getOpcionesCalificar();
  }
  internet() {
    Network.addListener('networkStatusChange', ({connected}) => {
      if (connected) this.net();
      else if (this.alertsService.net) this.noNet();
    });
  }
  net() { this.cargarServicios(); this.alertsService.finishLoadingN(); }
  noNet() { this.alertsService.initLoadingN();  }

}

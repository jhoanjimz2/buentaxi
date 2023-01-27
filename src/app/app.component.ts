import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

import { AboutService } from './services/about.service';
import { CalificarService } from './services/calificar.service';
import { LenguajeService } from './services/lenguaje.service';
import { SolicitarTaxiService } from './services/solicitar-taxi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private solicitarTaxiService: SolicitarTaxiService,
    private aboutService: AboutService,
    private calificarService: CalificarService,
    private lenguajeService: LenguajeService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      await SplashScreen.show({ showDuration: 3000, autoHide: true });
      this.lenguajeService.inicializarArchivos();
      this.lenguajeService.setearIdiomaInicial();
      this.solicitarTaxiService.getAplicaciones();
      this.solicitarTaxiService.getTelefonos();
      this.aboutService.getAbout();
      this.calificarService.getOpcionesCalificar();
    });
  }
}

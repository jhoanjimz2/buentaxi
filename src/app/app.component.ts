import { Component } from '@angular/core';
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
    private solicitarTaxiService: SolicitarTaxiService,
    private aboutService: AboutService,
    private calificarService: CalificarService,
    private lenguajeService: LenguajeService
  ) {
    this.lenguajeService.inicializarArchivos();
    this.lenguajeService.setearIdiomaInicial();
    this.solicitarTaxiService.getAplicaciones();
    this.solicitarTaxiService.getTelefonos();
    this.aboutService.getAbout();
    this.calificarService.getOpcionesCalificar();
  }
}

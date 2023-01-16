import { Component } from '@angular/core';
import { AboutService } from './services/about.service';
import { SolicitarTaxiService } from './services/solicitar-taxi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private solicitarTaxiService: SolicitarTaxiService,
    private aboutService: AboutService
  ) {
    this.solicitarTaxiService.getAplicaciones();
    this.solicitarTaxiService.getTelefonos();
    this.aboutService.getAbout();
  }
}

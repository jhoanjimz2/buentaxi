import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { TranslateService } from '@ngx-translate/core';
import { NuevoViajeService } from '../../services/nuevo-viaje.service';
import { PerfilTaxista } from '../../interfaces/interfaces';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage {

  perfilTaxista: PerfilTaxista = new PerfilTaxista();

  constructor(
    private translateService: TranslateService,
    private nuevoViajeService: NuevoViajeService
  ) {
    this.perfilTaxista = this.nuevoViajeService.perfilTaxista;
  }

  async shared() {
    let m1, m2, m3, m4; 
    this.translateService.get('VOYENELTAXI').subscribe(value => { m1 = value; });
    this.translateService.get('AFILIADOA').subscribe(value => { m2 = value; });
    this.translateService.get('CONDUCTOR').subscribe(value => { m3 = value; });
    this.translateService.get('UNSERVICIOOFRECIDO').subscribe(value => { m4 = value; });
    await Share.share({
      text: (` ${m1} ${this.perfilTaxista.placa} ${m2} ${this.perfilTaxista.empresa} ${m3} 
        ${this.perfilTaxista.nombre } ${this.perfilTaxista.apellido} . ${m4} `),
      url: 'https://sictaxi.gov.co/aplicacion',
    });
  }

}

import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage {

  taxi = {
    placas: 'UQS 139',
    empresa: 'TAXIS SUPER EJECUTIVOS S.A..',
    conductor: 'Jose Antonio Acosta Carval'
  }

  constructor(
    private translateService: TranslateService
  ) {

  }

  async shared() {
    let m1, m2, m3, m4; 
    this.translateService.get('VOYENELTAXI').subscribe(value => { m1 = value; });
    this.translateService.get('AFILIADOA').subscribe(value => { m2 = value; });
    this.translateService.get('CONDUCTOR').subscribe(value => { m3 = value; });
    this.translateService.get('UNSERVICIOOFRECIDO').subscribe(value => { m4 = value; });
    await Share.share({
      text: (` ${m1} ${this.taxi.placas} ${m2} ${this.taxi.empresa} ${m3} ${this.taxi.conductor}. ${m4} `),
      url: 'https://sictaxi.gov.co/aplicacion',
    });
  }

}

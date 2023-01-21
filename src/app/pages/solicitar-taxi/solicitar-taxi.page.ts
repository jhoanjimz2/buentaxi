import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Aplicacion, Telefono } from 'src/app/interfaces/interfaces';
import { SolicitarTaxiService } from 'src/app/services/solicitar-taxi.service';

@Component({
  selector: 'app-solicitar-taxi',
  templateUrl: './solicitar-taxi.page.html',
  styleUrls: ['./solicitar-taxi.page.scss'],
})
export class SolicitarTaxiPage {

  public telefonos!: Telefono[];
  public aplicaciones!: Aplicacion[];
  
  @ViewChild(IonSlides) slider!: IonSlides;

  constructor(
    private solicitarTaxiService: SolicitarTaxiService
  ) {
    this.telefonos = this.solicitarTaxiService.telefonos;
    this.aplicaciones = this.solicitarTaxiService.aplicaciones;
  }

  ionViewDidEnter() {
    this.slider.lockSwipes(true);
  }

  cambiar(event: any) {
    this.slider.lockSwipes(false);
    this.slider.slideTo(event.detail.value); 
    this.slider.lockSwipes(true);
  }
  

}

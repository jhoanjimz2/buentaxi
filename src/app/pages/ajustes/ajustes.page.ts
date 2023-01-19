import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AboutService } from 'src/app/services/about.service';
import { CalificarService } from 'src/app/services/calificar.service';
import { LenguajeService } from 'src/app/services/lenguaje.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private lenguajeService: LenguajeService,
    private aboutService: AboutService,
    private calificarService: CalificarService,
    private translateService: TranslateService,
  ) {}

  async presentActionSheet() {
    let ingles!: string, espanol!: string, cancelar!: string; 
    this.translateService.get('INGLES').subscribe(value => { ingles = value; });
    this.translateService.get('ESPAÑOL').subscribe(value => { espanol = value; });
    this.translateService.get('CANCELAR2').subscribe(value => { cancelar = value; });
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: ingles,
          handler: () => {
            this.lenguajeService.selecionarIdioma('en');
            this.aboutService.getAbout();
            this.calificarService.getOpcionesCalificar();
          }
        },
        { 
          text: espanol,
          handler: () => {
            this.lenguajeService.selecionarIdioma('es');
            this.aboutService.getAbout();
            this.calificarService.getOpcionesCalificar();
          },
        },
        { text: cancelar, role: 'cancel' },
      ],
    });

    actionSheet.present();
  }


}

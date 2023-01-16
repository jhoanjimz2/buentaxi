import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {

  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Ingles',
          data: { action: 'share' },
        },
        { 
          text: 'Español',
          data: { action: 'share' },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: { action: 'cancel' },
        },
      ],
    });

    actionSheet.present();
  }


}

import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private loading: any;
  private loadingN: any;
  private msg1!: string;
  private msg2!: string;
  private msg3!: string;
  private msg4!: string;

  private _net: boolean = true;
  get net(): boolean { return this._net; }
  set net(value: boolean) { this._net = value; }
  
  constructor(
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {}

  async toastAlert(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      mode: 'ios',
      cssClass: 'toastNegro'
    });
    await toast.present();
  }

  async toastAlertTrueError(type: boolean) {
    const toast = await this.toastController.create({
      message: this.message(type),
      duration: 3000,
      position: 'bottom',
      mode: 'ios',
      cssClass: 'toastNegro'
    });
    await toast.present();
  }

  message(type: boolean): string {
    this.translate.get('EXITO').subscribe(value => { this.msg1 = value; });
    this.translate.get('ERROR').subscribe(value => { this.msg2 = value; });
    if (type) return this.msg1;
    else return this.msg2;
  }

  async initLoading() {
    this.translate.get('CARGANDO').subscribe(value => { this.msg4 = value; });
    this.loading = await this.loadingCtrl.create({
      message: this.msg4,
      mode: "ios",
    });
    return this.loading.present();
  }
  finishLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 500);
  }
  async initLoadingN() {
    this.net = false;
    this.translate.get('RECONECTANDO').subscribe(value => { this.msg3 = value; });
    this.loadingN = await this.loadingCtrl.create({
      message: this.msg3,
      mode: "ios",
    });
    return this.loadingN.present();
  }
  finishLoadingN() {
    this.loadingN.dismiss();
    this.net = true;
  }


}

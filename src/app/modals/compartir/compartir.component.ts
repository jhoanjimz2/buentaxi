import { Component, Input, OnChanges } from '@angular/core';
import { ModalsService } from 'src/app/services/modals.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { PerfilTaxista } from 'src/app/interfaces/interfaces';
import * as htmlToImage from 'html-to-image';
import { AlertsService } from '../../services/alerts.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';
import { CalificarService } from '../../services/calificar.service';



@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.component.html',
  styleUrls: ['./compartir.component.scss'],
})
export class CompartirComponent implements OnChanges {
  @Input() taxista!: PerfilTaxista;
  imgdata: string = '';

  constructor( 
    public modalsService: ModalsService,
    private alertsService: AlertsService,
    private socialSharing: SocialSharing,
    private translate: TranslateService,
    private calificarService: CalificarService
  ) { }
  ngOnChanges() { 
    if(this.taxista) this.cargarImg();
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
  cargarImg() {
    this.calificarService.img(this.taxista.id)
    .subscribe
      ({ 
        next: (data: any) => { 
          this.imgdata = data!.imagen;
          setTimeout(() => {
            this.convertir();
          }, 2000)
        }, error: () => {
          this.alertsService.finishLoading();
          let msg = '';
          this.translate.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
          this.alertsService.toastAlert(msg);
          this.modalsService.modalCompartir = false;
        }
      });
  }
  convertir() {
    let html = document.getElementById('compartirHtml');
    htmlToImage.toPng(html!).then((url: string) => {
      let img = new Image();
      img.src = url;
      this.modalsService.modalCompartir = false;
      this.shared(img);
    }).catch( (error: any)  => {
      this.alertsService.finishLoading();
      let msg = '';
      this.translate.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
      this.alertsService.toastAlert(msg);
      this.modalsService.modalCompartir = false;
    });
  }
  shared(img: any) {
    this.alertsService.finishLoading();
    this.socialSharing.share('','',img.src,'').then(() => {
    }).catch(() => {
      let msg = '';
      this.translate.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
      this.alertsService.toastAlert(msg);
    });
  }

}

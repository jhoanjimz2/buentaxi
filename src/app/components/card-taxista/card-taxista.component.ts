import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PerfilTaxista } from 'src/app/interfaces/interfaces';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-card-taxista',
  templateUrl: './card-taxista.component.html',
  styleUrls: ['./card-taxista.component.scss'],
})
export class CardTaxistaComponent {
  @Input() taxista!: PerfilTaxista;
  @Output() like: EventEmitter<any> = new EventEmitter();
  @Output() disLike: EventEmitter<any> = new EventEmitter();
  @Output() share: EventEmitter<any> = new EventEmitter();

  constructor( private alertsService: AlertsService) { }
  likeClick() { this.like.emit(this.taxista.idVinculacion); }
  disLikeClick() { this.disLike.emit(this.taxista.idVinculacion); }
  shared() { this.alertsService.initLoading(); this.share.emit(this.taxista); }

}

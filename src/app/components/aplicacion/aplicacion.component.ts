import { Component, Input, OnInit } from '@angular/core';
import { Aplicacion } from 'src/app/interfaces/aplicacion.interface';
import { Market } from '@ionic-native/market/ngx';


@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.scss'],
})
export class AplicacionComponent implements OnInit {
  
  @Input() aplicacion!: Aplicacion;

  constructor(
    private market: Market
  ) { }

  ngOnInit() {}

  goApp() {
    this.market.open(this.aplicacion.url);
  }

}

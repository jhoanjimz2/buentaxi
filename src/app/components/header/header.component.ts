import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() backColor!: string;
  @Input() title!: string;
  @Input() subtitle: string = '';
  @Input() modal: boolean = false;
  @Input() modal2: boolean = false;
  @Output() btnCancel: EventEmitter<any> = new EventEmitter();

  constructor(
    private navCtrl: NavController
  ) { }

  back() {
    if(this.modal) return this.btnCancel.emit();
    this.navCtrl.back();
  }

}

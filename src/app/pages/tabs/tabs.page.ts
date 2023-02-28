import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs!: IonTabs;
  tab = '';

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  change() {
    var element = document.getElementById(this.tab);
    var element2 = document.getElementById('menu');
    if (this.tab != '') element!.className = 'opacityOut';
    if (this.tab == 'ajustes') element2!.className = 'swipeDown';

    this.tab = this.tabs.getSelected()!;
    if (this.tab == 'ajustes') element2!.className = 'swipeUp';
    element = document.getElementById(this.tab);
    element!.className = 'opacityIn';
  }
  pages(ruta: string) {
    this.router.navigateByUrl(ruta);
  }
  back() {
    this.navCtrl.back();
  }

}

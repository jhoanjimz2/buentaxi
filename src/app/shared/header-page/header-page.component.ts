import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent {
  @Input() titulo: String = '';
  @Input() rutaDefaultBack: String = '/pages/tabs/ajustes';
  @Input() slot: String = 'start';
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-about',
  templateUrl: './item-about.component.html',
  styleUrls: ['./item-about.component.scss'],
})
export class ItemAboutComponent {
  @Input() img!: string;
  @Input() text!: string;
}

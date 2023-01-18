import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent {
  @Output() btnCancel: EventEmitter<any> = new EventEmitter();
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() btnTextCancel!: string;
  
  cancel() {
    this.btnCancel.emit();
  }
}

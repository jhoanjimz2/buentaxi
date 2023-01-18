import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { IonicModule } from '@ionic/angular';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HeaderModalComponent } from './header-modal/header-modal.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    HeaderTabComponent,
    HeaderPageComponent,
    HeaderModalComponent
  ],
  exports: [
    HeaderTabComponent,
    HeaderPageComponent,
    HeaderModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    IconsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { IonicModule } from '@ionic/angular';
import { HeaderPageComponent } from './header-page/header-page.component';



@NgModule({
  declarations: [
    HeaderTabComponent,
    HeaderPageComponent
  ],
  exports: [
    HeaderTabComponent,
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

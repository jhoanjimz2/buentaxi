import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaDePageRoutingModule } from './acerca-de-routing.module';

import { AcercaDePage } from './acerca-de.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaDePageRoutingModule,
    SharedModule,
    IconsModule
  ],
  declarations: [AcercaDePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AcercaDePageModule {}

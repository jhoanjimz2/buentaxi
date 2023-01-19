import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarTaxiPageRoutingModule } from './solicitar-taxi-routing.module';

import { SolicitarTaxiPage } from './solicitar-taxi.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarTaxiPageRoutingModule,
    SharedModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SolicitarTaxiPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SolicitarTaxiPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizarPageRoutingModule } from './cotizar-routing.module';

import { CotizarPage } from './cotizar.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizarPageRoutingModule,
    SharedModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [CotizarPage]
})
export class CotizarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizarPageRoutingModule } from './cotizar-routing.module';

import { CotizarPage } from './cotizar.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ModalsModule } from '../../modals/modals.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizarPageRoutingModule,
    ComponentsModule,
    ModalsModule,
    TranslateModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    PipesModule
  ],
  declarations: [CotizarPage]
})
export class CotizarPageModule {}

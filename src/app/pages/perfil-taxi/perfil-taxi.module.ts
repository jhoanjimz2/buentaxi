import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilTaxiPageRoutingModule } from './perfil-taxi-routing.module';

import { PerfilTaxiPage } from './perfil-taxi.page';
import { ModalsModule } from 'src/app/modals/modals.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilTaxiPageRoutingModule,
    ModalsModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [PerfilTaxiPage]
})
export class PerfilTaxiPageModule {}

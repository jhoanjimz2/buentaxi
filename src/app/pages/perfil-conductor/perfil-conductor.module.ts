import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilConductorPageRoutingModule } from './perfil-conductor-routing.module';

import { PerfilConductorPage } from './perfil-conductor.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { ModalsModule } from 'src/app/modals/modals.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilConductorPageRoutingModule,
    SharedModule,
    PipesModule,
    IconsModule,
    ModalsModule,
    TranslateModule
  ],
  declarations: [PerfilConductorPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PerfilConductorPageModule {}

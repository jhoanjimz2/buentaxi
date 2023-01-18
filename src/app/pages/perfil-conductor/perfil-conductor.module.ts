import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilConductorPageRoutingModule } from './perfil-conductor-routing.module';

import { PerfilConductorPage } from './perfil-conductor.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilConductorPageRoutingModule,
    SharedModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [PerfilConductorPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PerfilConductorPageModule {}

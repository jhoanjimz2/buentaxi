import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoViajePageRoutingModule } from './nuevo-viaje-routing.module';

import { NuevoViajePage } from './nuevo-viaje.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormulariosModule } from 'src/app/forms/formularios.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoViajePageRoutingModule,
    PipesModule,
    FormulariosModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [NuevoViajePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NuevoViajePageModule {}

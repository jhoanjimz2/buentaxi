import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoViajePageRoutingModule } from './nuevo-viaje-routing.module';

import { NuevoViajePage } from './nuevo-viaje.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormulariosModule } from 'src/app/forms/formularios.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoViajePageRoutingModule,
    SharedModule,
    PipesModule,
    FormulariosModule,
    TranslateModule
  ],
  declarations: [NuevoViajePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NuevoViajePageModule {}

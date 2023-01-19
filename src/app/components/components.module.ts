import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonoComponent } from './telefono/telefono.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { IonicModule } from '@ionic/angular';
import { MapaCotizarComponent } from './mapa-cotizar/mapa-cotizar.component';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { ItemRadioComponent } from './item-radio/item-radio.component';
import { FormulariosModule } from '../forms/formularios.module';
import { ModalsModule } from '../modals/modals.module';



@NgModule({
  declarations: [
    TelefonoComponent,
    AplicacionComponent,
    MapaCotizarComponent,
    ItemRadioComponent
  ],
  exports: [
    TelefonoComponent,
    AplicacionComponent,
    MapaCotizarComponent,
    ItemRadioComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SharedModule,
    FormulariosModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }

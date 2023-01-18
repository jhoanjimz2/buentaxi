import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonoComponent } from './telefono/telefono.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { IonicModule } from '@ionic/angular';
import { FormCotizarComponent } from './form-cotizar/form-cotizar.component';
import { MapaCotizarComponent } from './mapa-cotizar/mapa-cotizar.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CalificarGustoComponent } from './calificar-gusto/calificar-gusto.component';
import { CalificarNoGustoComponent } from './calificar-no-gusto/calificar-no-gusto.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TelefonoComponent,
    AplicacionComponent,
    FormCotizarComponent,
    MapaCotizarComponent,
    CalificarGustoComponent,
    CalificarNoGustoComponent
  ],
  exports: [
    TelefonoComponent,
    AplicacionComponent,
    FormCotizarComponent,
    MapaCotizarComponent,
    CalificarGustoComponent,
    CalificarNoGustoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    GooglePlaceModule,
    SharedModule
  ]
})
export class ComponentsModule { }

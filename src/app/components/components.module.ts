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



@NgModule({
  declarations: [
    TelefonoComponent,
    AplicacionComponent,
    FormCotizarComponent,
    MapaCotizarComponent
  ],
  exports: [
    TelefonoComponent,
    AplicacionComponent,
    FormCotizarComponent,
    MapaCotizarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    GooglePlaceModule
  ]
})
export class ComponentsModule { }

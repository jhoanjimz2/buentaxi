import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapaCotizarComponent } from './mapa-cotizar/mapa-cotizar.component';
import { PipesModule } from '../pipes/pipes.module';
import { ItemRadioComponent } from './item-radio/item-radio.component';
import { FormulariosModule } from '../forms/formularios.module';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItemIdiomaComponent } from './item-idioma/item-idioma.component';
import { ItemAboutComponent } from './item-about/item-about.component';
import { CardTaxistaComponent } from './card-taxista/card-taxista.component';
import { ItemRadioCotizadorComponent } from './item-radio-cotizador/item-radio-cotizador.component';
import { BarraColoresTabsComponent } from './barra-colores-tabs/barra-colores-tabs.component';
import { ItemTarifaComponent } from './item-tarifa/item-tarifa.component';
import { ItemTarifaCarComponent } from './item-tarifa-car/item-tarifa-car.component';
import { ItemTarifaPhoneComponent } from './item-tarifa-phone/item-tarifa-phone.component';



@NgModule({
  declarations: [
    MapaCotizarComponent,
    ItemRadioComponent,
    EncabezadoComponent,
    HeaderComponent,
    ItemIdiomaComponent,
    ItemAboutComponent,
    CardTaxistaComponent,
    ItemRadioCotizadorComponent,
    BarraColoresTabsComponent,
    ItemTarifaComponent,
    ItemTarifaCarComponent,
    ItemTarifaPhoneComponent
  ],
  exports: [
    MapaCotizarComponent,
    ItemRadioComponent,
    EncabezadoComponent,
    HeaderComponent,
    ItemIdiomaComponent,
    ItemAboutComponent,
    CardTaxistaComponent,
    ItemRadioCotizadorComponent,
    BarraColoresTabsComponent,
    ItemTarifaComponent,
    ItemTarifaCarComponent,
    ItemTarifaPhoneComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormulariosModule,
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }

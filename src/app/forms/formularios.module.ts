import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCalificarComponent } from './form-calificar/form-calificar.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidarPlacaComponent } from './form-validar-placa/form-validar-placa.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    FormCalificarComponent,
    FormValidarPlacaComponent
  ],
  exports:[
    FormCalificarComponent,
    FormValidarPlacaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FormulariosModule { }

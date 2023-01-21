import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCalificarComponent } from './form-calificar/form-calificar.component';
import { FormCotizarComponent } from './form-cotizar/form-cotizar.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidarPlacaComponent } from './form-validar-placa/form-validar-placa.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    FormCalificarComponent,
    FormCotizarComponent,
    FormValidarPlacaComponent
  ],
  exports:[
    FormCalificarComponent,
    FormCotizarComponent,
    FormValidarPlacaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    TranslateModule
  ]
})
export class FormulariosModule { }

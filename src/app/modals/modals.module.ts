import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificarGustoComponent } from './calificar-gusto/calificar-gusto.component';
import { CalificarNoGustoComponent } from './calificar-no-gusto/calificar-no-gusto.component';
import { ComponentsModule } from '../components/components.module';
import { FormulariosModule } from '../forms/formularios.module';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalificarGustoComponent,
    CalificarNoGustoComponent
  ],
  exports: [
    CalificarGustoComponent,
    CalificarNoGustoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FormulariosModule,
    SharedModule,
    ComponentsModule,
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalsModule { }

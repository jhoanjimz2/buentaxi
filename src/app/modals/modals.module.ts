import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificarGustoComponent } from './calificar-gusto/calificar-gusto.component';
import { CalificarNoGustoComponent } from './calificar-no-gusto/calificar-no-gusto.component';
import { ComponentsModule } from '../components/components.module';
import { FormulariosModule } from '../forms/formularios.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TarifasComponent } from './tarifas/tarifas.component';
import { CompartirComponent } from './compartir/compartir.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CalificarGustoComponent,
    CalificarNoGustoComponent,
    TarifasComponent,
    CompartirComponent
  ],
  exports: [
    CalificarGustoComponent,
    CalificarNoGustoComponent,
    TarifasComponent,
    CompartirComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FormulariosModule,
    ComponentsModule,
    TranslateModule,
    PipesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalsModule { }

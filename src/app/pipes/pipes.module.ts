import { NgModule } from '@angular/core';
import { ImagenesPipe } from './imagenes.pipe';
import { FormattNumberPipe } from './formatt-number.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
    FormattNumberPipe,
  ],
  exports: [
    ImagenesPipe,
    FormattNumberPipe
  ]
})
export class PipesModule { }

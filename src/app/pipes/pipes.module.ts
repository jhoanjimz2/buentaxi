import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
  ],
  exports: [
    ImagenesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

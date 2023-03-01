import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(img: string): any {
    if (!img) {
      // return'assets/new/no-image.jpg';
      return'assets/new/7002.jpeg';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }
    
    return img;
  }

}

import { Component, Input, OnDestroy } from '@angular/core';
import { OpcionCalificar, Calificacion } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-item-radio',
  templateUrl: './item-radio.component.html',
  styleUrls: ['./item-radio.component.scss'],
})
export class ItemRadioComponent implements OnDestroy {
  @Input() calificacion!: Calificacion;
  @Input() opcion!: OpcionCalificar;
  @Input() index!: number;
  ngOnDestroy() {
    this.opcion.seleccionado = false;
    // this.calificacion.idComentario = [];
  }
  check(val: boolean) {
    // var elementIn = document.getElementById(`in${this.index}`);
    // var elementOut = document.getElementById(`out${this.index}`);
    // this.opcion.seleccionado = val;
    // if (this.opcion.seleccionado) {
    //   elementOut!.className = 'in';
    //   elementIn!.className = 'out';
    //   this.calificacion.idComentario.push(this.opcion.id)
    // } else {
    //   elementIn!.className = 'in';
    //   elementOut!.className = 'out';
    //   var indice = this.calificacion.idComentario.indexOf(this.opcion.id); // obtenemos el indice
    //   this.calificacion.idComentario.splice(indice, 1);
    // }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormCotizar } from 'src/app/interfaces/formularios.interface';

@Component({
  selector: 'app-form-cotizar',
  templateUrl: './form-cotizar.component.html',
  styleUrls: ['./form-cotizar.component.scss'],
})
export class FormCotizarComponent implements OnInit {

  formCotizar : FormCotizar = new FormCotizar();

  constructor() { }

  ngOnInit() {
    console.log(this.formCotizar);
  }

}

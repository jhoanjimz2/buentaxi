import { Component, OnInit } from '@angular/core';
import { NuevoViajeService } from 'src/app/services/nuevo-viaje.service';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {

  constructor(
    private nuevoViajeService: NuevoViajeService
  ) { }

  ngOnInit() {
    this.nuevoViajeService.getParametros().subscribe(data => {
      console.log(data);
    })
  }

  validar() {
    this.nuevoViajeService.verificarPlaca('UQS000').subscribe(data => {
      console.log(data);
    });
  }

}

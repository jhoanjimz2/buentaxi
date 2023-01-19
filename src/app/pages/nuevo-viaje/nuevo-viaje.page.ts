import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NuevoViajeService } from 'src/app/services/nuevo-viaje.service';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage {

  constructor(
    private nuevoViajeService: NuevoViajeService,
    private navController: NavController,
  ) { }

  validar() {
    this.navController.navigateForward('/pages/perfil-conductor');
    // this.nuevoViajeService.verificarPlaca('TZW393').subscribe(data => {
    //   console.log(data);
    // });
  }

}

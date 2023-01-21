import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PerfilTaxista } from 'src/app/interfaces/interfaces';
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

  validar(event: any) {
    this.nuevoViajeService.verificarPlaca(event.placa).subscribe((data: PerfilTaxista) => {
      this.nuevoViajeService.perfilTaxista = data;
      this.navController.navigateForward('/pages/perfil-conductor');
    })
  }

}

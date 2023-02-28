import { Component } from '@angular/core';
import { NuevoViajeService } from '../../services/nuevo-viaje.service';
import { ResponseValidarPlaca, PerfilTaxista } from '../../interfaces/interfaces';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-perfil-taxi',
  templateUrl: './perfil-taxi.page.html',
  styleUrls: ['./perfil-taxi.page.scss'],
})
export class PerfilTaxiPage  {
  number: number = 0;
  taxistas: PerfilTaxista[] = [];
  idVinculacion = {
    idVinculacion: 0
  }
  taxista!: PerfilTaxista;

  constructor(
    private nuevoViajeService: NuevoViajeService,
    private modalsService: ModalsService
  ) {
    this.taxistas = this.nuevoViajeService.taxistas;
  }

  modalLike(event: any) {
    this.idVinculacion.idVinculacion = event;
    this.modalsService.modalLike = true;
  }
  modalDisLike(event: any) {
    this.idVinculacion.idVinculacion = event;
    this.modalsService.modalDisLike = true;
  }
  modalShare(event: any) {
    this.taxista = event;
    this.modalsService.modalCompartir = true;
  }
}

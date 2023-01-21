import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConexionService } from './conexion.service';
import { PerfilTaxista } from '../interfaces/interfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoViajeService  extends ConexionService {

  private _perfilTaxista!: PerfilTaxista;
  public get perfilTaxista(): PerfilTaxista {
    return this._perfilTaxista;
  }
  public set perfilTaxista(value: PerfilTaxista) {
    this._perfilTaxista = value;
  }

  constructor(
    private http: HttpClient
    ) { super(http); }


  /* public verificarPlaca(placa: string){
    return this.consultaPOST('/api/searchVehiculoByPlacaConductores', placa);
  } */
  getParametros(){
    return this.consultaGET('/api/getParametros');
  }
  verificarPlaca(placa: string) {
    return this.http.get<PerfilTaxista>(`${environment.apiLocal}perfil_prueba.json`).pipe(
      map((data: PerfilTaxista) => {
        return data;
      })
    );;
  }

}

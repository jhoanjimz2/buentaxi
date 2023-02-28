import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { MyDevice, PerfilTaxista } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoViajeService  extends ConexionService {

  private _taxistas!: PerfilTaxista[];
  get taxistas(): PerfilTaxista[] { return this._taxistas; } 
  set taxistas(value: PerfilTaxista[]) { this._taxistas = value; }

  constructor( private http: HttpClient ) { super(http); }


  verificarPlaca(myDevice: MyDevice){
    return this.http.post<PerfilTaxista[]>(`${environment.api}/searchVehicleByDriverPlate`, myDevice, { headers: this.headers }).pipe(
      map((data:PerfilTaxista[]) => {
        return data;
      })
    );
  }
  // verificarPlaca(myDevice: MyDevice){
  //   return this.http.get<PerfilTaxista[]>(`${environment.apiLocal}perfil_prueba.json`).pipe(
  //     map((data:PerfilTaxista[]) => {
  //       return data;
  //     })
  //   );
  // }

}

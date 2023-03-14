import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyDevice, PerfilTaxista } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoViajeService {

  private _taxistas!: PerfilTaxista[];
  get taxistas(): PerfilTaxista[] { return this._taxistas; } 
  set taxistas(value: PerfilTaxista[]) { this._taxistas = value; }

  constructor( private http: HttpClient ) { }


  verificarPlaca(myDevice: MyDevice){
    const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'X-localization': this.lenguaje }
    return this.http.post<PerfilTaxista[]>(`${environment.api}/searchVehicleByDriverPlate`, myDevice, { headers }).pipe(
      map((data:PerfilTaxista[]) => {
        return data;
      })
    );
  }
  get lenguaje(): string {
    return localStorage.getItem("lenguaje")!.toUpperCase() || 'ES';
  }

}

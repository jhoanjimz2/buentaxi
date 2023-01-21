import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Aplicacion, Telefono } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SolicitarTaxiService {

  private _telefonos!: Telefono[];
  public get telefonos(): Telefono[] {
    return this._telefonos;
  }
  public set telefonos(value: Telefono[]) {
    this._telefonos = value;
  }

  private _aplicaciones!: Aplicacion[];
  public get aplicaciones(): Aplicacion[] {
    return this._aplicaciones;
  }
  public set aplicaciones(value: Aplicacion[]) {
    this._aplicaciones = value;
  }

  constructor(
    private http: HttpClient
  ) {}

  public getAplicaciones() {
    return this.http.get<Aplicacion[]>(`${environment.apiLocal}aplicaciones.json`).subscribe((data: Aplicacion[]) => {
      this.aplicaciones = data;
    });
  } 

  public getTelefonos() {
    return this.http.get<Telefono[]>(`${environment.apiLocal}telefonos.json`).subscribe((data: Telefono[]) => {
      this.telefonos = data;
    });
  } 

}
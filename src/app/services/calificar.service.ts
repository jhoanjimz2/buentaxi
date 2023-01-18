import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OpcionCalificar, respOpCal } from '../interfaces/calificar.interface';

@Injectable({
  providedIn: 'root'
})
export class CalificarService {

  private _gusto!: OpcionCalificar[];
  public get gusto(): OpcionCalificar[] {
    return this._gusto;
  }
  public set gusto(value: OpcionCalificar[]) {
    this._gusto = value;
  }

  private _nogusto!: OpcionCalificar[];
  public get nogusto(): OpcionCalificar[] {
    return this._nogusto;
  }
  public set nogusto(value: OpcionCalificar[]) {
    this._nogusto = value;
  }

  constructor(
    private http: HttpClient
  ) {}

  public getOpcionesCalificar() {
    return this.http.get<respOpCal>(`${environment.apiLocal}calificar.json`).subscribe(({ gusto, nogusto }: respOpCal) => {
      this.gusto = gusto;
      this.nogusto = nogusto;
    });
  } 

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsResponse, OpcionCalificar } from 'src/app/interfaces/interfaces';

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
    return this.http.get<NewsResponse>(`${environment.apiLocal}calificar.json`).subscribe((data: NewsResponse) => {
      if (localStorage.getItem('lenguaje') == 'en') {
        this.gusto = data.en.gusto;
        this.nogusto = data.en.nogusto;
      } else {
        this.gusto = data.es.gusto;
        this.nogusto = data.es.nogusto;
      }
    });
  } 

}

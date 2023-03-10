import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Calificacion, OpcionCalificar } from 'src/app/interfaces/interfaces';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class CalificarService extends ConexionService {

  private _gusto!: OpcionCalificar[];
  get gusto(): OpcionCalificar[] { return this._gusto; }
  set gusto(value: OpcionCalificar[]) { this._gusto = value; }

  private _nogusto!: OpcionCalificar[];
  get nogusto(): OpcionCalificar[] { return this._nogusto; }
  set nogusto(value: OpcionCalificar[]) { this._nogusto = value; }

  constructor( private http: HttpClient ) { super(http); }
  getOpcionesCalificar() { this.getOpLikes(); this.getOpDisLikes(); }
  getOpLikes() {
    let params = { negative: 0, language: localStorage.getItem('lenguaje')!.toString().toUpperCase() }
    return this.http.get<OpcionCalificar[]>(`${environment.api}/getCommentsByType`, { headers: this.headers, params  })
    .subscribe({
      next: (data: OpcionCalificar[]) => {
        this.gusto = data;
      }
    })
  }
  getOpDisLikes() {
    let params = { negative: 1, language: localStorage.getItem('lenguaje')!.toString().toUpperCase() }
    return this.http.get<OpcionCalificar[]>(`${environment.api}/getCommentsByType`, { headers: this.headers, params })
    .subscribe({
      next: (data: OpcionCalificar[]) => {
        this.nogusto = data;
      }
    })
  }
  addCalificacion(calificacion: Calificacion){
    return this.http.post(`${environment.api}/addComment`, calificacion, { headers: this.headers }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  img(id:number){
    return this.http.get(`https://api.sictaxi.gov.co/api/getImgDriver/${id}`, { headers: this.headers })
    .pipe(
      map((data: any) => {
        return data;
      })
    );
  }

}

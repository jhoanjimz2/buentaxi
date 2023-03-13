import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestCotizacion, ResponseCotizacion } from '../interfaces/interfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  constructor( private http: HttpClient ) { }

  cotizarRuta(requestCotizacion: RequestCotizacion){
    const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
    return this.http.post<ResponseCotizacion>(`${environment.api}/calculateTaximetro`, requestCotizacion, { headers }).pipe(
      map((data:ResponseCotizacion) => {
        return data;
      })
    );
  }
  
}

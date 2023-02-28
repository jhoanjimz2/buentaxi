import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestCotizacion, ResponseCotizacion } from '../interfaces/interfaces';
import { ConexionService } from './conexion.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService extends ConexionService {

  constructor( private http: HttpClient ) { super(http); }

  cotizarRuta(requestCotizacion: RequestCotizacion){
    return this.http.post<ResponseCotizacion>(`${environment.api}/calculateTaximetro`, requestCotizacion, { headers: this.headers }).pipe(
      map((data:ResponseCotizacion) => {
        return data;
      })
    );
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(
    private conexionHTTP: HttpClient
  ) {}
  
  consultaGET(ruta: string) {
    var myHeaders = new HttpHeaders();
    return this.conexionHTTP.get(`${environment.api}${ruta}`, { headers: myHeaders }).pipe(
      map((data) => {
        return data;
      })
    );
  }
  
  consultaPOST(ruta: string, data: any) {
    var myHeaders = new HttpHeaders();
    return this.conexionHTTP.post(`${environment.api}${ruta}`, data, { headers: myHeaders }).pipe(
      map((data) => {
        return data;
      })
    );
  }



}

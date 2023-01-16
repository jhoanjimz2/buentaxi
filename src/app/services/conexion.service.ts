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
    return this.conexionHTTP.post(`${environment.api}${ruta}`, this.formData(data), { headers: myHeaders }).pipe(
      map((data) => {
        return data;
      })
    );
  }
  
  formData(object: any, metodoput = false) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => {
      if (Array.isArray(object[key])) {
        object[key].forEach(function (data: any, index: number) {
          if (data) formData.append(key + "[" + index + "]", data);
        });
      } else {
        if (object[key]) formData.append(key, object[key]);
      }
    });
    if (metodoput) {
      formData.append("_method", "PUT");
    }
    return formData;
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  headers = new HttpHeaders()
  .append('Content-Type','application/json')
  .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE')
  .append('Access-Control-Allow-Origin', '*')
  .append('X-localization', localStorage.getItem('lenguaje')!.toString().toUpperCase())
  

  constructor( private conexionHTTP: HttpClient ) {}


}

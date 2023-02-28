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
  

  constructor( private conexionHTTP: HttpClient ) {}


}

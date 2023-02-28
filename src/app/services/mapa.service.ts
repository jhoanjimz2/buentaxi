import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GeoLatLng, Poligono } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private _geo!: GeoLatLng;
  get geo(): GeoLatLng { return this._geo; }
  set geo(value: GeoLatLng) { this._geo = value; }

  private _poligonos!: Poligono[];
  get poligonos(): Poligono[] { return this._poligonos; }
  set poligonos(value: Poligono[]) { this._poligonos = value; }
  
  constructor(
    private http: HttpClient
  ) {
    this.setCoorPred();
    this.setCoorPhone();
  }

  async setCoorPhone() {
    const coordinates = await Geolocation.getCurrentPosition();
    if (coordinates.coords) {
      this.geo = { 
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
    }
  }

  setCoorPred() {
    this.geo = { lat: 11.2315252, lng: -74.182397 };
  }

  getPoligonos() {
    return this.http.get<Poligono[]>(`${environment.apiLocal}poligonos.json`).subscribe({
      next: (data: Poligono[]) => {
        this.poligonos = data;
      }
    });
  }

}

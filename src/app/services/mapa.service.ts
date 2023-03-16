import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GeoLatLng } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private _geo!: GeoLatLng;
  get geo(): GeoLatLng { return this._geo; }
  set geo(value: GeoLatLng) { this._geo = value; }
  
  constructor(
    private http: HttpClient
  ) {
    this.setCoorPred();
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
    this.setCoorPhone();
  }

}

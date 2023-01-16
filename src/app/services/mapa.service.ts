import { Injectable } from '@angular/core';
import { GeoLatLng } from '../interfaces/mapa.interface';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private _geo!: GeoLatLng;
  public get geo(): GeoLatLng {
    return this._geo;
  }
  public set geo(value: GeoLatLng) {
    this._geo = value;
  }

  
  constructor() {
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


}

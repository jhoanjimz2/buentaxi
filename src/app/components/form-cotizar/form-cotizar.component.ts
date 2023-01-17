import { Component, Input } from '@angular/core';
import { FormCotizar } from 'src/app/interfaces/formularios.interface';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
declare var google: any;

@Component({
  selector: 'app-form-cotizar',
  templateUrl: './form-cotizar.component.html',
  styleUrls: ['./form-cotizar.component.scss'],
})
export class FormCotizarComponent {

  @Input() mapa: any;
  formCotizar : FormCotizar = new FormCotizar();
  click = 1;
  geoCoder = new google.maps.Geocoder();

  markerOrigen_ : any = new google.maps.Marker({
    id: 'origen',
    position: new google.maps.LatLng(0, 0),
    map: null,
    animation: google.maps.Animation.DROP,
    visible: true
  });
  
  markerDestino_ = new google.maps.Marker({
    id: 'destino',
    position: new google.maps.LatLng(0, 0),
    map: null,
    animation: google.maps.Animation.DROP,
    visible: true
  });

  constructor() { }
  
  origenAddress(address: Address) {
    this.formCotizar.origen = address.formatted_address;
    this.markerOrigen(this.formCotizar.origen);
  }
  destinoAddress(address: Address) {
    this.formCotizar.destino = address.formatted_address;
    this.markerDestino(this.formCotizar.destino);
  }
  
  show() { 
    if(this.click==1) {
      document.getElementById("form")!.style.height = "202px";
      document.getElementById("icon-arrow")!.style.transform = "rotate(180deg)";
      this.click = this.click + 1;
    } else{
      document.getElementById("form")!.style.height = "0px"; 
      document.getElementById("icon-arrow")!.style.transform = "rotate(0deg)"; 
      this.click = 1;
      this.markerDestino_.setMap(null);
      this.markerOrigen_.setMap(null);
      this.formCotizar.origen = '';
      this.formCotizar.destino = '';
    }   
  }

  markerOrigen(address: string) {
    this.geoCoder.geocode({ address }, ( [{geometry: {location}}] : any ) => {
      this._markerOrigen(location.lat(), location.lng());
    });
  }

  markerDestino(address: string) {
    this.geoCoder.geocode({ address }, ( [{geometry: {location}}] : any ) => {
      this._markerDestino(location.lat(), location.lng());
    });
  }

  _markerOrigen(lat: number, lng: number) {
    this.markerOrigen_.setMap(null);
    this.markerOrigen_.position = new google.maps.LatLng(lat, lng);
    this.markerOrigen_.setMap(this.mapa);
  }

  _markerDestino(lat: number, lng: number) {
    this.markerDestino_.setMap(null);
    this.markerDestino_.position = new google.maps.LatLng(lat, lng);
    this.markerDestino_.setMap(this.mapa);
  }

}

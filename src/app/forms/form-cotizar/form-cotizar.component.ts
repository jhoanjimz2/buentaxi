import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
declare var google: any;

@Component({
  selector: 'app-form-cotizar',
  templateUrl: './form-cotizar.component.html',
  styleUrls: ['./form-cotizar.component.scss'],
})
export class FormCotizarComponent {
  @Output() btnConfirm: EventEmitter<any> = new EventEmitter();

  @Input() mapa: any;
  formulario: FormGroup = this.fb.group({
    origen: new FormControl('', [ Validators.required ] ),
    destino: new FormControl('', [ Validators.required ] ),
    estimado: new FormControl({value: '', disabled: true})
  });


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

  constructor(
    private fb: FormBuilder
  ) { }
  
  origenAddress(address: Address) {
    this.formulario.controls["origen"].setValue(address.formatted_address);
    this.markerOrigen(this.formulario.controls["origen"].value);
  }
  destinoAddress(address: Address) {
    this.formulario.controls["destino"].setValue(address.formatted_address);
    this.markerDestino(this.formulario.controls["destino"].value);
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
      this.formulario.reset();
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

  cotizar() {
    this.formulario.controls["estimado"].setValue('$ 10000 COP');
  }

}

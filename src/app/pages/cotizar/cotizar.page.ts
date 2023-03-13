import { Component, ElementRef, ViewChild } from '@angular/core';
import { Poligono, GeoLatLng, MapaSinEtiqueta, OptionsMapa, RequestCotizacion, ResponseCotizacion } from 'src/app/interfaces/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MapaService } from 'src/app/services/mapa.service';
import { AlertsService } from '../../services/alerts.service';
import { ModalsService } from 'src/app/services/modals.service';
import { CotizadorService } from '../../services/cotizador.service';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { TranslateService } from '@ngx-translate/core';
import { poligonos } from 'src/assets/data/poligonos';
declare var google: any;

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.page.html',
  styleUrls: ['./cotizar.page.scss'],
})
export class CotizarPage {
  @ViewChild('map', { read: ElementRef }) mapRef!: ElementRef;
  cotizado = false;
  formulario: FormGroup = this.fb.group({
    origen: new FormControl('', [ Validators.required ] ),
    destino: new FormControl('', [ Validators.required ] ),
  });
  radioCoti = [
    { id: 1, comentario: 'ESDOMINGO', valid: false },
    { id: 2, comentario: 'SERVICIOS', valid: false }
  ]
  requestCotizacion: RequestCotizacion = new RequestCotizacion();
  responseCotizacion: ResponseCotizacion = new ResponseCotizacion();
  geoCoder = new google.maps.Geocoder();
  mapa: any;
  mapaSinEtiquetas = MapaSinEtiqueta; 
  geo!: GeoLatLng;
  origen = new google.maps.Marker({
    position: null, map: null, animation: google.maps.Animation.DROP,
    draggable: true,
    icon: {
      url: 'assets/new/cotizador/morigen.png',
      scaledSize: new google.maps.Size(30, 30)
    }
  });
  destino = new google.maps.Marker({
    position: null, map: null, animation: google.maps.Animation.DROP,
    draggable: true,
    icon: {
      url: 'assets/new/cotizador/mdestino.png',
      scaledSize: new google.maps.Size(30, 30)
    }
  });
  polylineOptions = new google.maps.Polyline({strokeColor: '#000' });
  directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: this.polylineOptions, suppressMarkers: true });
  directionsService = new google.maps.DirectionsService();
  poligonos: any = [];

  northeast = new google.maps.LatLng(11.328094, -74.102499);
  southwest = new google.maps.LatLng(11.004476, -74.216948);
  newBounds = new google.maps.LatLngBounds(this.southwest, this.northeast);
  opciones: Options = {
    origin: new google.maps.LatLng( { lat: 11.2315252, lng: -74.182397 } ), 
    bounds: this.newBounds,
    componentRestrictions: { country: "col" },
    fields: [], strictBounds: false, types: [],
  };
  msgError1!:string;
  msgError2!:string;
  msgError3!:string;
  msgError4!:string;
  msgError5!:string;

  latLngOr: GeoLatLng = { lat: 0, lng: 0 };
  latLngDe: GeoLatLng = { lat: 0, lng: 0 };
  
  pM: Poligono[] = poligonos;

  constructor( 
    private mS: MapaService, 
    private moS: ModalsService,
    private aS: AlertsService, 
    private fb: FormBuilder,
    private cS: CotizadorService,
    private tr: TranslateService
  ) { this.geo = this.mS.geo; }

  async setPosition() { 
    await this.mS.setCoorPhone();
    let valid =  await this.verificarPunto(this.mS.geo.lat, this.mS.geo.lng);
    if(!valid) {
      this.tr.get('POSICIONNOVALIDA').subscribe(value => { this.msgError5 = value; });
      this.aS.toastAlert(this.msgError5);
    } else if( valid && !this.cotizado ) {
      this.latLngOr = this.mS.geo;
      let { results: [ { formatted_address } ] } = await this.geoCoder.geocode({ location: this.latLngOr });
      this.formulario.controls['origen'].setValue(formatted_address);
    } else if ( valid && this.cotizado ) {
      this.latLngOr = this.mS.geo;
      let { results: [ { formatted_address } ] } = await this.geoCoder.geocode({ location: this.latLngOr });
      this.formulario.controls['origen'].setValue(formatted_address);
      this.origen.setMap(null);
      this.validOrigin();
    }
  }

  openModal() { this.moS.modalTarifas = true; }

  ngAfterViewInit() { this.miMapa(); }

  setAddress(a: Address, t: string) { 
    this.formulario.controls[t].setValue(a.name);
    if( t == 'origen' ) this.latLngOr = { lat: a.geometry.location.lat(), lng: a.geometry.location.lng() };
    else this.latLngDe = { lat: a.geometry.location.lat(), lng: a.geometry.location.lng() };
  }

  async miMapa() {
    const location = new google.maps.LatLng( this.geo );
    const options = new OptionsMapa();
    let customMapType = new google.maps.StyledMapType(this.mapaSinEtiquetas, { name: 'Custom Style' });
    options.center = location;
    options.mapTypeControlOptions = { mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map'] }
    this.mapa = new google.maps.Map(this.mapRef.nativeElement, options);
    this.mapa.mapTypes.set('map', customMapType);
    var element = document.getElementById("mapa");
    await this.pM.map((data: Poligono) => { this.pintarPoligonos(data); });
    google.maps.event.addListener(this.origen,'drag', async ( data: any ) => {
      element!.className = 'mapah100';
    });
    google.maps.event.addListener(this.destino,'drag', async ( data: any ) => {
      element!.className = 'mapah100';
    });
    google.maps.event.addListener(this.origen, 'dragend', async ( { latLng: { lat, lng } } : any ) => {
      let valid =  await this.verificarPunto(lat(), lng());
      if (!valid) this.errorMarkerOrigenTo();
      else this.trueMarkerOrigenTo(lat(), lng());
      element!.className = 'mapah50';
    });
    google.maps.event.addListener(this.destino, 'dragend', async ( { latLng: { lat, lng } } : any ) => {
      let valid =  await this.verificarPunto(lat(), lng());
      if (!valid) this.errorMarkerDestinoTo();
      else this.trueMarkerDestinoTo(lat(), lng());
      element!.className = 'mapah50';
    });
  }
  errorMarkerOrigenTo() {
    this.errorMsg();
    this.origen.setMap(null);
    this.origen.position = new google.maps.LatLng(this.latLngOr); 
    this.origen.setMap(this.mapa);
  }
  async trueMarkerOrigenTo(lat: number, lng:number) {
    this.latLngOr = { lat, lng };
    await this.validOrigin();
    let { results: [ { formatted_address } ] } = await this.geoCoder.geocode({ location: this.latLngOr });
    this.formulario.controls['origen'].setValue(formatted_address)
  }
  errorMarkerDestinoTo() {
    this.errorMsg();
    this.destino.setMap(null);
    this.destino.position = new google.maps.LatLng(this.latLngDe); 
    this.destino.setMap(this.mapa);
  }
  async trueMarkerDestinoTo(lat: number, lng:number) {
    this.latLngDe = { lat, lng };
    await this.validOrigin();
    let { results: [ { formatted_address } ] } = await this.geoCoder.geocode({ location: this.latLngDe });
    this.formulario.controls['destino'].setValue(formatted_address)
  }
  errorMsg() {
    this.tr.get('PUNTOSELECCIONADO').subscribe(value => { this.msgError4 = value; });
    this.aS.toastAlert(this.msgError4);
  }

  pintarPoligonos(poligono: Poligono) { 
    var coords = poligono.polygon.map( (data: GeoLatLng) => {
      var coord = { lat: parseFloat(data.lat.toString()), lng: parseFloat(data.lng.toString()) };
      return coord;
    });
    var poligonoN = new google.maps.Polygon({ 
      paths: coords, uuid: poligono.uuid,
      strokeColor: '#8DD7F7',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#8DD7F750',
      fillOpacity: 1,
    });
    poligonoN.setMap(this.mapa);
    this.poligonos.push(poligonoN);
  }
  async validOrigin() {
    this.aS.initLoading();
    let valid =  await this.verificarPunto(this.latLngOr.lat, this.latLngOr.lng, 'origen');
    if (valid) this.validDestiny();
    else {
      this.tr.get('ERRORORIGEN').subscribe(value => { this.msgError1 = value; });
      this.aS.finishLoading(); this.aS.toastAlert(this.msgError1); return; 
    }
  }
  async validDestiny() {
    let valid =  await this.verificarPunto(this.latLngDe.lat, this.latLngDe.lng, 'destino');
    if (valid) this.cotizador();
    else { 
      this.tr.get('ERRORDESTINO').subscribe(value => { this.msgError2 = value; });
      this.aS.finishLoading(); this.aS.toastAlert(this.msgError2); return; 
    }
  }
  async cotizador() {
    this.requestCotizacion.festivoDomingo = this.radioCoti[0].valid;
    this.requestCotizacion.llamadaApp     = this.radioCoti[1].valid;
    let { routes: [{legs: [{ distance, duration }]}] } = await this.directionsService.route(this.request);
    if (duration.value) this.requestCotizacion.tiempo = duration.text.toString().replace(/\s/g, '').replace(/\D/g, '');
    if (distance.value) this.requestCotizacion.distanciaRecorrida = distance.value;
    else { 
      this.tr.get('ERRORRUTA').subscribe(value => { this.msgError3 = value; });
      this.aS.finishLoading(); this.aS.toastAlert(this.msgError3); return; 
    }
    this.cS.cotizarRuta(this.requestCotizacion).subscribe({
      next: async (data: ResponseCotizacion) => {
        this.responseCotizacion = data;
        this.aS.finishLoading();
        await this.setRuta();
        this.cotizado = true;
      },
      error: () => {
        this.aS.finishLoading();
        let msg = '';
        this.tr.get('TUSOLICITUDERROR').subscribe(value => { msg = value; });
        this.aS.toastAlert(msg);
      }
    })
  }
  async setRuta() {
    await this.setMarkers();
    this.directionsService.route(this.request, (response: any) => {
      this.directionsDisplay.setDirections(response); 
      this.directionsDisplay.setMap(this.mapa);
    });
  }
  get request() {
    return {
      origin: new google.maps.LatLng(this.latLngOr.lat, this.latLngOr.lng),
      destination: new google.maps.LatLng(this.latLngDe.lat, this.latLngDe.lng),
      travelMode: google.maps.TravelMode.DRIVING
    }
  }

  async setMarkers() {
    this.origen.position = new google.maps.LatLng(this.latLngOr); 
    this.origen.setMap(this.mapa);
    this.destino.position = new google.maps.LatLng(this.latLngDe); 
    this.destino.setMap(this.mapa);
  }

  verificarPunto(lat: number, lng:number, type?: string): boolean {
    let valid: boolean = false;
    this.poligonos.map((data: any) => {
      let value;
      value = google.maps.geometry.poly.containsLocation( {lat, lng}, data);
      if ( value && !type ) {  valid = value; }
      else if ( value && type == 'origen' ){  valid = value; this.requestCotizacion.origen = data.uuid; }
      else if ( value && type == 'destino' ){  valid = value;this.requestCotizacion.destino = data.uuid; }
    });
    return valid;
  }

  resetCalcular() {
    this.aS.initLoading();
    setTimeout(() => {
      this.aS.finishLoading();
      this.cotizado = false;
      this.directionsDisplay.setMap(null);
      this.origen.setMap(null);
      this.destino.setMap(null);
      this.formulario.reset();
      this.radioCoti[0].valid = false;
      this.radioCoti[1].valid = false;
    }, 1000)
  }
}

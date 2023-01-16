import { Component, ElementRef, ViewChild } from '@angular/core';
import { GeoLatLng, OptionsMapa } from 'src/app/interfaces/mapa.interface';
import { MapaSinEtiqueta } from 'src/app/interfaces/modelo-mapa.interface';
import { MapaService } from 'src/app/services/mapa.service';
declare var google: any;

@Component({
  selector: 'app-mapa-cotizar',
  templateUrl: './mapa-cotizar.component.html',
  styleUrls: ['./mapa-cotizar.component.scss'],
})
export class MapaCotizarComponent {
  @ViewChild('map', { read: ElementRef }) mapRef!: ElementRef;
  mapa: any;
  mapaSinEtiquetas = MapaSinEtiqueta; 
  geo!: GeoLatLng;

  constructor(
    private mapaService: MapaService
  ) {
    this.geo = this.mapaService.geo;
  }
  ngAfterViewInit() {
    this.mapa_con_mis_coordenadas();
  }

  mapa_con_mis_coordenadas() {
    const location = new google.maps.LatLng( this.geo );
    var customMapType = new google.maps.StyledMapType(this.mapaSinEtiquetas, { name: 'Custom Style' });
    var customMapTypeId = 'custom_style';
    const options = new OptionsMapa();
    options.center = location;
    options.mapTypeControlOptions = {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
    this.mapa = new google.maps.Map(this.mapRef.nativeElement, options);
    this.mapa.mapTypes.set(customMapTypeId, customMapType);
    this.mapa.setMapTypeId(customMapTypeId);
    this.mapa.addListener("idle", () => {
    });
  }

}

export interface GeoLatLng {
    lat: number;
    lng: number;
}

export class OptionsMapa {
    center: any;
    maxZoom: number;
    minZoom: number;
    zoom: number;
    streetViewControl: boolean;
    fullscreenControl: boolean;
    zoomControl: boolean;
    mapTypeControl: boolean;
    clickableIcons: boolean;
    mapTypeControlOptions: any;

    constructor() {
        this.maxZoom           = 22;
        this.minZoom           = 4;
        this.zoom              = 12;
        this.streetViewControl = false;
        this.fullscreenControl = false;
        this.zoomControl       = false;
        this.mapTypeControl    = false;
        this.clickableIcons    = false;
    }
}
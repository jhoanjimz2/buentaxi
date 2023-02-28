export class RequestCotizacion {
    distanciaRecorrida  :number;
    festivoDomingo      :boolean;
    llamadaApp          :boolean;
    origen              :string;
    destino             :string;
    tiempo              :number;
    constructor() {
        this.distanciaRecorrida = 0;
        this.festivoDomingo     = false;
        this.llamadaApp         = false;
        this.origen             = '';
        this.destino            = '';
        this.tiempo             = 0;
    }
}
export class ResponseCotizacion {
    tarifaBase  :number;
    tarifaAprox :number;
    tarifaFija? :boolean;
    recargos    :Recargos;
    constructor() {
        this.tarifaBase  = 0;
        this.tarifaAprox = 0;
        this.recargos    = {} as Recargos;
    }
}
export interface Recargos {
    recargoNocturno?                 :number;
    recargofestivoDomingo?           :number;
    recargollamadaApp?               :number;
    recargoOrigenDestino?            :number;
    valorTrayectoOrigenDestinoRuta?  :string;
    valorTarifaFija?                 :number;
    recargoSalidaTerminal?           :number;
    recargoSalidaAeropuerto?         :number;
}
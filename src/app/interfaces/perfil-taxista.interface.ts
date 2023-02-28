
export class ResponseValidarPlaca {
    placa: string;
    taxistas: PerfilTaxista[];
    constructor() {
        this.placa = '';
        this.taxistas = [];
    }
}

export class PerfilTaxista {
    jornada:               string;
    fechaActual:           Date;
    GoodComment:           number | null;
    BadComment:            number | null;
    negativos:             number;
    positivos:             number;
    recomendaciones:       number;
    id:                    number;
    nombres:               string;
    apellidos:             string;
    fechaTarjetaOperacion: string;
    modelo:                string;
    placa:                 string;
    marca:                 string;
    fotoURL:               string;
    idVinculacion:         number;
    razonSocial:           string;
    ultimaRefrendacion:    Date;
    refrendo:              number;
    constructor() {
        this.jornada                    = '';
        this.fechaActual                = new Date();
        this.GoodComment                = null;
        this.BadComment                 = null;
        this.negativos                  = 40;
        this.positivos                  = 2000;
        this.recomendaciones            = 9;
        this.id                         = 0;
        this.nombres                    = '';
        this.apellidos                  = '';
        this.fechaTarjetaOperacion      = '';
        this.modelo                     = '';
        this.placa                      = '';
        this.marca                      = '';
        this.fotoURL                    = '';
        this.idVinculacion              = 0;
        this.razonSocial                = '';
        this.ultimaRefrendacion         = new Date();
        this.refrendo                   = 0;
    }
}

export class MyDevice {
    uuid            : string;
    esVirtual       : boolean;
    manufacturer    : string;
    modelo          : string;
    version         : string;
    plataforma      : string;
    serial          : string;
    fechaRegistro   : Date;
    token           : string;
    placa           : string;
    
    constructor() {
        this.uuid          = '';
        this.esVirtual     = false;
        this.manufacturer  = '';
        this.modelo        = '';
        this.version       = '';
        this.plataforma    = '';
        this.serial        = '';
        this.fechaRegistro = new Date();
        this.token         = '';
        this.placa         = '';
    }
}
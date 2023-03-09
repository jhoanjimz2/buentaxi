export interface OpcionCalificar {
    id:                    string;
    comentario:            string;
    seleccionado:          boolean;
}


export class Calificacion {
    buenServicio: number;
    comentarios: string[];
    idVinculacion: number;
    recomienda: boolean;
    idDispositivo: '';
    correoTelefonoUsuario: string;
    nombre: string;
    telefono: string;
    uuid: string;
    esVirtual: boolean;
    serial: string;
    modelo: string;
    manufacturer: string;
    plataforma: string;
    version: string;
    fechaRegistro: Date;
    token: string;
    constructor() {
        this.buenServicio = 1;
        this.comentarios = [];
        this.idVinculacion = 0;
        this.recomienda = false;
        this.idDispositivo = ''
        this.correoTelefonoUsuario = '';
        this.nombre = '';
        this.telefono = '';
        this.uuid = '';
        this.esVirtual = false;
        this.serial = '';
        this.modelo = '';
        this.manufacturer = '';
        this.plataforma = '';
        this.version = '';
        this.fechaRegistro = new Date();
        this.token = '';
    }
}
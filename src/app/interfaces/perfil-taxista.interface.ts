export class PerfilTaxista {
    img_taxista:    string;
    placa:          string;
    nombre:         string;
    apellido:       string;
    empresa:        string;
    permiso:        boolean;
    calificaciones: Calificaciones;
    constructor() {
       this.img_taxista = ''; 
       this.placa = '';
       this.nombre = '';
       this.apellido = '';
       this.empresa = '';
       this.permiso = false;
       this.calificaciones = {} as Calificaciones;
    }
}

export interface Calificaciones {
    likes:    number;
    dislikes: number;
    nivel:    number;
}
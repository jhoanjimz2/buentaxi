export interface NewsResponse {
    es: respOpCal;
    en: respOpCal;
}
export interface respOpCal {
    gusto  : OpcionCalificar[];
    nogusto: OpcionCalificar[];
}

export interface OpcionCalificar {
    id         :   string;
    descripcion:   string;
}
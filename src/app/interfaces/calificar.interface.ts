export interface respOpCal {
    gusto  : OpcionCalificar[];
    nogusto: OpcionCalificar[];
}

export interface OpcionCalificar {
    id         :   string;
    descripcion:   string;
}
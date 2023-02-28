export interface AboutResponse {
    es: About;
    en: About;
}
export interface About {
    descripcion: string;
    items      : ItemAbout[];
}

export interface ItemAbout {
    descripcion :   string;
}
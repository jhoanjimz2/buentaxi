import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  constructor(
    private translate: TranslateService
  ) { }

  public inicializarArchivos() {
    this.translate.addLangs(['es', 'en', 'fr']);
  }
  public setearIdiomaInicial() {
    if (localStorage.getItem('lenguaje')) {
      this.translate.setDefaultLang(localStorage.getItem('lenguaje')!);
      this.translate.use(localStorage.getItem('lenguaje')!);
    } else {
      this.translate.setDefaultLang('es');
      this.translate.use('es');
      localStorage.setItem('lenguaje', 'es');
    }
  }
  selecionarIdioma(len: string) {
    this.translate.use(len);
    localStorage.setItem('lenguaje', len);
  }
}

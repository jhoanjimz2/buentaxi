import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  private _modalLike: boolean = false;
  get modalLike(): boolean { return this._modalLike; }
  set modalLike(value: boolean) { this._modalLike = value; }

  private _modalDisLike: boolean = false;
  get modalDisLike(): boolean { return this._modalDisLike; }
  set modalDisLike(value: boolean) { this._modalDisLike = value; }

  private _modalTarifas: boolean = false;
  get modalTarifas(): boolean { return this._modalTarifas; }
  set modalTarifas(value: boolean) { this._modalTarifas = value;}

  private _modalCompartir: boolean = false;
  get modalCompartir(): boolean { return this._modalCompartir; }
  set modalCompartir(value: boolean) { this._modalCompartir = value; }
  
}

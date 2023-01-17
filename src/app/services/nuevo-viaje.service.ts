import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class NuevoViajeService  extends ConexionService {

  constructor(
    private http: HttpClient
    ) {
    super(http);
  }


  public verificarPlaca(placa: string){
    return this.consultaPOST('/api/searchVehiculoByPlacaConductores', placa);
  }
  public getParametros(){
    return this.consultaGET('/api/getParametros');
  }

}
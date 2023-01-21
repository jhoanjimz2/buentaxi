import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { About, AboutResponse } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private _about!: About;
  public get about(): About {
    return this._about;
  }
  public set about(value: About) {
    this._about = value;
  }
  
  constructor(
    private http: HttpClient
  ) {}

  public getAbout() {
    return this.http.get<AboutResponse>(`${environment.apiLocal}about.json`).subscribe((data: AboutResponse) => {
      if (localStorage.getItem('lenguaje') == 'en') {
        this.about = data.en;
      } else {
        this.about = data.es;
      }
    });
  } 
}

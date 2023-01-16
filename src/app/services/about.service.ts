import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { About } from '../interfaces/item-about.interface';

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
    return this.http.get<About>(`${environment.apiLocal}about.json`).subscribe((data: About) => {
      this.about = data;
    });
  } 
}

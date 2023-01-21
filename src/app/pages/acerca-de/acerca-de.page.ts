import { Component } from '@angular/core';
import { About } from 'src/app/interfaces/interfaces';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage {

  public about!: About;

  constructor(
    private aboutService: AboutService
  ) {
    this.about = this.aboutService.about;
  }

}

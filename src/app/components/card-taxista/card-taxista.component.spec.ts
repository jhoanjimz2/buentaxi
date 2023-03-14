import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardTaxistaComponent } from './card-taxista.component';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';
import { PerfilTaxista } from 'src/app/interfaces/interfaces';

describe('CardTaxistaComponent', () => {
  let component: CardTaxistaComponent;
  let fixture: ComponentFixture<CardTaxistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTaxistaComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        PipesModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardTaxistaComponent);
    component = fixture.componentInstance;
    component.taxista = new PerfilTaxista();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

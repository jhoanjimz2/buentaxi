import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ItemTarifaComponent } from './item-tarifa.component';
import { FormattNumberPipe } from 'src/app/pipes/formatt-number.pipe';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

describe('ItemTarifaComponent', () => {
  let component: ItemTarifaComponent;
  let fixture: ComponentFixture<ItemTarifaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ItemTarifaComponent,
        FormattNumberPipe
      ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
    registerLocaleData(localeEs, 'es');
    fixture = TestBed.createComponent(ItemTarifaComponent);
    component = fixture.componentInstance;
    component.tarifa = { icono: 'carreraminima.png', comentario: 'CARRERAMINIMA', precio: 7000 };
    
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

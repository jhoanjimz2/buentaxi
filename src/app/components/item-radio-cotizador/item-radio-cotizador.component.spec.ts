import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemRadioCotizadorComponent } from './item-radio-cotizador.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ItemRadioCotizadorComponent', () => {
  let component: ItemRadioCotizadorComponent;
  let fixture: ComponentFixture<ItemRadioCotizadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRadioCotizadorComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemRadioCotizadorComponent);
    component = fixture.componentInstance;
    component.item = { id: 1, comentario: 'ESDOMINGO', valid: false };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

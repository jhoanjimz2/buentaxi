import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemRadioCotizadorComponent } from './item-radio-cotizador.component';

describe('ItemRadioCotizadorComponent', () => {
  let component: ItemRadioCotizadorComponent;
  let fixture: ComponentFixture<ItemRadioCotizadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRadioCotizadorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemRadioCotizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

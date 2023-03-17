import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemTarifaBanderazoComponent } from './item-tarifa-banderazo.component';

describe('ItemTarifaBanderazoComponent', () => {
  let component: ItemTarifaBanderazoComponent;
  let fixture: ComponentFixture<ItemTarifaBanderazoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTarifaBanderazoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTarifaBanderazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

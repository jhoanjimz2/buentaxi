import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemTarifaPhoneComponent } from './item-tarifa-phone.component';

describe('ItemTarifaPhoneComponent', () => {
  let component: ItemTarifaPhoneComponent;
  let fixture: ComponentFixture<ItemTarifaPhoneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTarifaPhoneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTarifaPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

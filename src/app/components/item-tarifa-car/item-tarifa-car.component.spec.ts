import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemTarifaCarComponent } from './item-tarifa-car.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ItemTarifaCarComponent', () => {
  let component: ItemTarifaCarComponent;
  let fixture: ComponentFixture<ItemTarifaCarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTarifaCarComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTarifaCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

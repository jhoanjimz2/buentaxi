import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemRadioComponent } from './item-radio.component';
import { Calificacion } from '../../interfaces/calificar.interface';

describe('ItemRadioComponent', () => {
  let component: ItemRadioComponent;
  let fixture: ComponentFixture<ItemRadioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRadioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemRadioComponent);
    component = fixture.componentInstance;
    component.opcion = { "id": '1', "comentario": "Buen Taxi", seleccionado: false };
    component.index = 0;
    component.calificacion = new Calificacion();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

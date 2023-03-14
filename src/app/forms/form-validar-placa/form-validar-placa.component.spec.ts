import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormValidarPlacaComponent } from './form-validar-placa.component';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormValidarPlacaComponent', () => {
  let component: FormValidarPlacaComponent;
  let fixture: ComponentFixture<FormValidarPlacaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidarPlacaComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot()
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormValidarPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

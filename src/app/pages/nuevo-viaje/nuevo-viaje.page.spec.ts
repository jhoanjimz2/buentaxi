import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoViajePage } from './nuevo-viaje.page';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { FormulariosModule } from 'src/app/forms/formularios.module';

describe('NuevoViajePage', () => {
  let component: NuevoViajePage;
  let fixture: ComponentFixture<NuevoViajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoViajePage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot(),
        ComponentsModule,
        FormulariosModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

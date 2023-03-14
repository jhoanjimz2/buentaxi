import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { IdiomaPage } from './idioma.page';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('IdiomaPage', () => {
  let component: IdiomaPage;
  let fixture: ComponentFixture<IdiomaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomaPage ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        ComponentsModule,
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IdiomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

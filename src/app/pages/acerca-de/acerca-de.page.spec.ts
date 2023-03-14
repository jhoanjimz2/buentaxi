import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { AcercaDePage } from './acerca-de.page';
import { TranslateModule } from '@ngx-translate/core';

describe('AcercaDePage', () => {
  let component: AcercaDePage;
  let fixture: ComponentFixture<AcercaDePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDePage ],
      imports: [
        IonicModule.forRoot(),
        ComponentsModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AcercaDePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompartirComponent } from './compartir.component';
import { TranslateModule } from '@ngx-translate/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';

describe('CompartirComponent', () => {
  let component: CompartirComponent;
  let fixture: ComponentFixture<CompartirComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientModule
      ],
      providers: [ SocialSharing ]
    }).compileComponents();

    fixture = TestBed.createComponent(CompartirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

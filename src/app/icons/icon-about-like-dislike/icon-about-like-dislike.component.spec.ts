import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IconAboutLikeDislikeComponent } from './icon-about-like-dislike.component';

describe('IconAboutLikeDislikeComponent', () => {
  let component: IconAboutLikeDislikeComponent;
  let fixture: ComponentFixture<IconAboutLikeDislikeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAboutLikeDislikeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IconAboutLikeDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

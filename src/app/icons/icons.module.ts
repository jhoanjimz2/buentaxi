import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAboutInfoComponent } from './icon-about-info/icon-about-info.component';
import { IconAboutLikeDislikeComponent } from './icon-about-like-dislike/icon-about-like-dislike.component';
import { IconAboutSharedComponent } from './icon-about-shared/icon-about-shared.component';
import { IconAboutInnlabComponent } from './icon-about-innlab/icon-about-innlab.component';
import { PipesModule } from '../pipes/pipes.module';
import { ClickHeaderComponent } from './click-header/click-header.component';
import { AwardComponent } from './award/award.component';



@NgModule({
  declarations: [
    IconAboutInfoComponent,
    IconAboutLikeDislikeComponent,
    IconAboutSharedComponent,
    IconAboutInnlabComponent,
    ClickHeaderComponent,
    AwardComponent
  ],
  exports: [
    IconAboutInfoComponent,
    IconAboutLikeDislikeComponent,
    IconAboutSharedComponent,
    IconAboutInnlabComponent,
    ClickHeaderComponent,
    AwardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class IconsModule { }

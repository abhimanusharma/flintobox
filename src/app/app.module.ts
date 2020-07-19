import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro, MDBSpinningPreloader, MDBModalRef } from 'ng-uikit-pro-standard';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColouredSectionComponent } from './components/coloured-section/coloured-section.component';
import { VideoContentSectionComponent } from './components/video-content-section/video-content-section.component';
import { ImageContentSectionComponent } from './components/image-content-section/image-content-section.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { SealContentComponent } from './components/seal-content/seal-content.component';
import { ThemesSectionComponent } from './components/themes-section/themes-section.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { SubscriptionSectionComponent } from './components/subscription-section/subscription-section.component';
import { CallbackModalComponent } from './components/callback-modal/callback-modal.component';
import { AwardsComponent } from './components/awards/awards.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ColouredSectionComponent, VideoContentSectionComponent, ImageContentSectionComponent, CallToActionComponent, SealContentComponent, ThemesSectionComponent, VideoModalComponent, SubscriptionSectionComponent, CallbackModalComponent, AwardsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [MDBSpinningPreloader, MDBModalRef],
  bootstrap: [AppComponent],
  entryComponents: [VideoModalComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColouredSectionComponent } from './components/coloured-section/coloured-section.component';
import { VideoContentSectionComponent } from './components/video-content-section/video-content-section.component';
import { ImageContentSectionComponent } from './components/image-content-section/image-content-section.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ColouredSectionComponent, VideoContentSectionComponent, ImageContentSectionComponent, CallToActionComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

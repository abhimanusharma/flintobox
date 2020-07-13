import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContentSectionComponent } from './video-content-section.component';

describe('VideoContentSectionComponent', () => {
  let component: VideoContentSectionComponent;
  let fixture: ComponentFixture<VideoContentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoContentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

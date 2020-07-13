import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageContentSectionComponent } from './image-content-section.component';

describe('ImageContentSectionComponent', () => {
  let component: ImageContentSectionComponent;
  let fixture: ComponentFixture<ImageContentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageContentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

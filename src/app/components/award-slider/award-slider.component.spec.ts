import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardSliderComponent } from './award-slider.component';

describe('AwardSliderComponent', () => {
  let component: AwardSliderComponent;
  let fixture: ComponentFixture<AwardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

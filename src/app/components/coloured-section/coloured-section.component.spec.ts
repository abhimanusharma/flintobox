import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouredSectionComponent } from './coloured-section.component';

describe('ColouredSectionComponent', () => {
  let component: ColouredSectionComponent;
  let fixture: ComponentFixture<ColouredSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColouredSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColouredSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

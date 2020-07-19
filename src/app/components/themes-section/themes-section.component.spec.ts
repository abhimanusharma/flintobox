import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesSectionComponent } from './themes-section.component';

describe('ThemesSectionComponent', () => {
  let component: ThemesSectionComponent;
  let fixture: ComponentFixture<ThemesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

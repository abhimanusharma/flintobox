import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionSectionComponent } from './subscription-section.component';

describe('SubscriptionSectionComponent', () => {
  let component: SubscriptionSectionComponent;
  let fixture: ComponentFixture<SubscriptionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

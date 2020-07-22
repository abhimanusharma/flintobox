import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SealContentComponent } from './seal-content.component';

describe('SealContentComponent', () => {
  let component: SealContentComponent;
  let fixture: ComponentFixture<SealContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SealContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SealContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

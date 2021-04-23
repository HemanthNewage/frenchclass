import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelfA1Component } from './delf-a1.component';

describe('DelfA1Component', () => {
  let component: DelfA1Component;
  let fixture: ComponentFixture<DelfA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelfA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelfA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelfA2Component } from './delf-a2.component';

describe('DelfA2Component', () => {
  let component: DelfA2Component;
  let fixture: ComponentFixture<DelfA2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelfA2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelfA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

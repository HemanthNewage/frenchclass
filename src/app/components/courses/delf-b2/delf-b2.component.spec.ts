import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelfB2Component } from './delf-b2.component';

describe('DelfB2Component', () => {
  let component: DelfB2Component;
  let fixture: ComponentFixture<DelfB2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelfB2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelfB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

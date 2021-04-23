import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelfB1Component } from './delf-b1.component';

describe('DelfB1Component', () => {
  let component: DelfB1Component;
  let fixture: ComponentFixture<DelfB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelfB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelfB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

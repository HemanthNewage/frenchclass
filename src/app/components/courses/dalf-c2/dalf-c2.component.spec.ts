import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalfC2Component } from './dalf-c2.component';

describe('DalfC2Component', () => {
  let component: DalfC2Component;
  let fixture: ComponentFixture<DalfC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalfC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalfC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

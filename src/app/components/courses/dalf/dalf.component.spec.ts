import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalfComponent } from './dalf.component';

describe('DalfComponent', () => {
  let component: DalfComponent;
  let fixture: ComponentFixture<DalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

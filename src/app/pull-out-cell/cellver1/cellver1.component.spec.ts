import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cellver1Component } from './cellver1.component';

describe('Cellver1Component', () => {
  let component: Cellver1Component;
  let fixture: ComponentFixture<Cellver1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cellver1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cellver1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

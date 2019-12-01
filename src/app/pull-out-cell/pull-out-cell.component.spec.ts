import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullOutCellComponent } from './pull-out-cell.component';

describe('PullOutCellComponent', () => {
  let component: PullOutCellComponent;
  let fixture: ComponentFixture<PullOutCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullOutCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullOutCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

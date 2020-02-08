import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessmenSelectComponent } from './chessmen-select.component';

describe('ChessmenSelectComponent', () => {
  let component: ChessmenSelectComponent;
  let fixture: ComponentFixture<ChessmenSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessmenSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessmenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

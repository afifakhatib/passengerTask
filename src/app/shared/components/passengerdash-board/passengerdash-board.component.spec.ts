import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerdashBoardComponent } from './passengerdash-board.component';

describe('PassengerdashBoardComponent', () => {
  let component: PassengerdashBoardComponent;
  let fixture: ComponentFixture<PassengerdashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerdashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerdashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

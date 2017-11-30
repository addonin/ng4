import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DingoBingoComponent } from './dingo-bingo.component';

describe('DingoBingoComponent', () => {
  let component: DingoBingoComponent;
  let fixture: ComponentFixture<DingoBingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingoBingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingoBingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

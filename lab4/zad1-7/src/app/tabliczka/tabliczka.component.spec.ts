import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabliczkaComponent } from './tabliczka.component';

describe('TabliczkaComponent', () => {
  let component: TabliczkaComponent;
  let fixture: ComponentFixture<TabliczkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabliczkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabliczkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

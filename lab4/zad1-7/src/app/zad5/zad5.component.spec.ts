import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad5Component } from './zad5.component';

describe('Zad5Component', () => {
  let component: Zad5Component;
  let fixture: ComponentFixture<Zad5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

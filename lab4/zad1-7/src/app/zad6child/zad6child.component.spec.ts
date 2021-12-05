import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad6childComponent } from './zad6child.component';

describe('Zad6childComponent', () => {
  let component: Zad6childComponent;
  let fixture: ComponentFixture<Zad6childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad6childComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad6childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

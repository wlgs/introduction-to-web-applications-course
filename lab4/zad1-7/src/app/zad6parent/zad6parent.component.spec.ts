import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad6parentComponent } from './zad6parent.component';

describe('Zad6parentComponent', () => {
  let component: Zad6parentComponent;
  let fixture: ComponentFixture<Zad6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

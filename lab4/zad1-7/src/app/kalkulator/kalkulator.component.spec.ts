import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkulatorComponent } from './kalkulator.component';

describe('KalkulatorComponent', () => {
  let component: KalkulatorComponent;
  let fixture: ComponentFixture<KalkulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalkulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalkulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

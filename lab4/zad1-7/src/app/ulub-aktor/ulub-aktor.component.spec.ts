import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlubAktorComponent } from './ulub-aktor.component';

describe('UlubAktorComponent', () => {
  let component: UlubAktorComponent;
  let fixture: ComponentFixture<UlubAktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlubAktorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlubAktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

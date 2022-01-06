import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishrateComponent } from './dishrate.component';

describe('DishrateComponent', () => {
  let component: DishrateComponent;
  let fixture: ComponentFixture<DishrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishrateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

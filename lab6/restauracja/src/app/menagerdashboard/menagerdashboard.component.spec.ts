import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagerdashboardComponent } from './menagerdashboard.component';

describe('MenagerdashboardComponent', () => {
  let component: MenagerdashboardComponent;
  let fixture: ComponentFixture<MenagerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenagerdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenagerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

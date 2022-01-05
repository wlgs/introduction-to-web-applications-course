import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledishComponent } from './singledish.component';

describe('SingledishComponent', () => {
  let component: SingledishComponent;
  let fixture: ComponentFixture<SingledishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

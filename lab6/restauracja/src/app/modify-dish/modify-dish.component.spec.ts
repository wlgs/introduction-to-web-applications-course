import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDishComponent } from './modify-dish.component';

describe('ModifyDishComponent', () => {
  let component: ModifyDishComponent;
  let fixture: ComponentFixture<ModifyDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

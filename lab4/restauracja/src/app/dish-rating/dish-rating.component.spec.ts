import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishRatingComponent } from './dish-rating.component';

describe('DishRatingComponent', () => {
  let component: DishRatingComponent;
  let fixture: ComponentFixture<DishRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

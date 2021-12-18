import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglephotoComponent } from './singlephoto.component';

describe('SinglephotoComponent', () => {
  let component: SinglephotoComponent;
  let fixture: ComponentFixture<SinglephotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglephotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostspageComponent } from './postspage.component';

describe('PostspageComponent', () => {
  let component: PostspageComponent;
  let fixture: ComponentFixture<PostspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

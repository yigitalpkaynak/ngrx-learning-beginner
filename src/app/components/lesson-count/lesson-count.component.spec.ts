import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCountComponent } from './lesson-count.component';

describe('LessonCountComponent', () => {
  let component: LessonCountComponent;
  let fixture: ComponentFixture<LessonCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

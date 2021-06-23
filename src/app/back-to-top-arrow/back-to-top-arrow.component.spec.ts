import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopArrowComponent } from './back-to-top-arrow.component';

describe('BackToTopArrowComponent', () => {
  let component: BackToTopArrowComponent;
  let fixture: ComponentFixture<BackToTopArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToTopArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToTopArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

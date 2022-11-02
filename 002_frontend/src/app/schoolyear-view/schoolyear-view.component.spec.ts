import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolyearViewComponent } from './schoolyear-view.component';

describe('SchoolyearViewComponent', () => {
  let component: SchoolyearViewComponent;
  let fixture: ComponentFixture<SchoolyearViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolyearViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolyearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

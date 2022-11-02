import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolyearAddComponent } from './schoolyear-add.component';

describe('SchoolyearAddComponent', () => {
  let component: SchoolyearAddComponent;
  let fixture: ComponentFixture<SchoolyearAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolyearAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolyearAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

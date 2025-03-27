import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldetailsComponent } from './schooldetails.component';

describe('SchooldetailsComponent', () => {
  let component: SchooldetailsComponent;
  let fixture: ComponentFixture<SchooldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchooldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchooldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

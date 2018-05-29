import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSectionComponent } from './google-section.component';

describe('GoogleSectionComponent', () => {
  let component: GoogleSectionComponent;
  let fixture: ComponentFixture<GoogleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

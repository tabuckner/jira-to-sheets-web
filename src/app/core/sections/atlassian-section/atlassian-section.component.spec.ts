import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlassianSectionComponent } from './atlassian-section.component';

describe('AtlassianSectionComponent', () => {
  let component: AtlassianSectionComponent;
  let fixture: ComponentFixture<AtlassianSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlassianSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlassianSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlassianCredsComponent } from './atlassian-creds.component';

describe('AtlassianCredsComponent', () => {
  let component: AtlassianCredsComponent;
  let fixture: ComponentFixture<AtlassianCredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlassianCredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlassianCredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

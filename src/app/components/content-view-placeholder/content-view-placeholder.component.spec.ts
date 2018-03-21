import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewPlaceholderComponent } from './content-view-placeholder.component';

describe('ContentViewPlaceholderComponent', () => {
  let component: ContentViewPlaceholderComponent;
  let fixture: ComponentFixture<ContentViewPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentViewPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViewPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

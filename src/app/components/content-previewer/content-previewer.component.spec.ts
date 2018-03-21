import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPreviewerComponent } from './content-previewer.component';

describe('ContentPreviewerComponent', () => {
  let component: ContentPreviewerComponent;
  let fixture: ComponentFixture<ContentPreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

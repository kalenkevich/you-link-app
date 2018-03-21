import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPreviewItemComponent } from './content-preview-item.component';

describe('ContentPreviewItemComponent', () => {
  let component: ContentPreviewItemComponent;
  let fixture: ComponentFixture<ContentPreviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPreviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

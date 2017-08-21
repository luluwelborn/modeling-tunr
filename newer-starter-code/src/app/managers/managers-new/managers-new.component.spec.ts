import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersNewComponent } from './managers-new.component';

describe('ManagersNewComponent', () => {
  let component: ManagersNewComponent;
  let fixture: ComponentFixture<ManagersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

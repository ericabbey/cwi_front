import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOpComponent } from './header-op.component';

describe('HeaderOpComponent', () => {
  let component: HeaderOpComponent;
  let fixture: ComponentFixture<HeaderOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

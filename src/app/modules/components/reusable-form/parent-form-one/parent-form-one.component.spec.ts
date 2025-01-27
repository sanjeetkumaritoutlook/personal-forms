import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFormOneComponent } from './parent-form-one.component';

describe('ParentFormOneComponent', () => {
  let component: ParentFormOneComponent;
  let fixture: ComponentFixture<ParentFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

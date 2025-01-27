import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioSelectComponent } from './formio-select.component';

describe('FormioSelectComponent', () => {
  let component: FormioSelectComponent;
  let fixture: ComponentFixture<FormioSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormioSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

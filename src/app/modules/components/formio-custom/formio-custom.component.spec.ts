import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioCustomComponent } from './formio-custom.component';

describe('FormioCustomComponent', () => {
  let component: FormioCustomComponent;
  let fixture: ComponentFixture<FormioCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormioCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

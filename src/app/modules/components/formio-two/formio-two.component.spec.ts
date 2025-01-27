import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioTwoComponent } from './formio-two.component';

describe('FormioTwoComponent', () => {
  let component: FormioTwoComponent;
  let fixture: ComponentFixture<FormioTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormioTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

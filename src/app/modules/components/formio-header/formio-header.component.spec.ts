import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioHeaderComponent } from './formio-header.component';

describe('FormioHeaderComponent', () => {
  let component: FormioHeaderComponent;
  let fixture: ComponentFixture<FormioHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormioHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

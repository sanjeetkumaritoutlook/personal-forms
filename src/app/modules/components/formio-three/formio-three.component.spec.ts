import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioThreeComponent } from './formio-three.component';

describe('FormioThreeComponent', () => {
  let component: FormioThreeComponent;
  let fixture: ComponentFixture<FormioThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormioThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

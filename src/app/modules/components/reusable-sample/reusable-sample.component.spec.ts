import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSampleComponent } from './reusable-sample.component';

describe('ReusableSampleComponent', () => {
  let component: ReusableSampleComponent;
  let fixture: ComponentFixture<ReusableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

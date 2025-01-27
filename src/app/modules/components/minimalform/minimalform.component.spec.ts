import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalformComponent } from './minimalform.component';

describe('MinimalformComponent', () => {
  let component: MinimalformComponent;
  let fixture: ComponentFixture<MinimalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillspolicyComponent } from './willspolicy.component';

describe('WillspolicyComponent', () => {
  let component: WillspolicyComponent;
  let fixture: ComponentFixture<WillspolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillspolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillspolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

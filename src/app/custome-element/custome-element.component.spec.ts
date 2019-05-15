import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeElementComponent } from './custome-element.component';

describe('CustomeElementComponent', () => {
  let component: CustomeElementComponent;
  let fixture: ComponentFixture<CustomeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

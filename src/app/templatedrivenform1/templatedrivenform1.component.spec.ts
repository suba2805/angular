import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatedrivenform1Component } from './templatedrivenform1.component';

describe('Templatedrivenform1Component', () => {
  let component: Templatedrivenform1Component;
  let fixture: ComponentFixture<Templatedrivenform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templatedrivenform1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Templatedrivenform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumer3Component } from './consumer3.component';

describe('Consumer3Component', () => {
  let component: Consumer3Component;
  let fixture: ComponentFixture<Consumer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consumer3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarnija1Component } from './tarnija1.component';

describe('Tarnija1Component', () => {
  let component: Tarnija1Component;
  let fixture: ComponentFixture<Tarnija1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarnija1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarnija1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarnija2Component } from './tarnija2.component';

describe('Tarnija2Component', () => {
  let component: Tarnija2Component;
  let fixture: ComponentFixture<Tarnija2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarnija2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarnija2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

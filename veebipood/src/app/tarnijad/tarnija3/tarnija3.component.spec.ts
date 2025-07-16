import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarnija3Component } from './tarnija3.component';

describe('Tarnija3Component', () => {
  let component: Tarnija3Component;
  let fixture: ComponentFixture<Tarnija3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarnija3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarnija3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

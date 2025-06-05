import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UudisedComponent } from './uudised.component';

describe('UudisedComponent', () => {
  let component: UudisedComponent;
  let fixture: ComponentFixture<UudisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UudisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UudisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

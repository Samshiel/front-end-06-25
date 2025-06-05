import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkulaatorComponent } from './kalkulaator.component';

describe('KalkulaatorComponent', () => {
  let component: KalkulaatorComponent;
  let fixture: ComponentFixture<KalkulaatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalkulaatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalkulaatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

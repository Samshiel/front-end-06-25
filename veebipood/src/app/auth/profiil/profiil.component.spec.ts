import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiilComponent } from './profiil.component';

describe('ProfiilComponent', () => {
  let component: ProfiilComponent;
  let fixture: ComponentFixture<ProfiilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

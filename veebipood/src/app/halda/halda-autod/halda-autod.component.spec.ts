import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaAutodComponent } from './halda-autod.component';

describe('HaldaAutodComponent', () => {
  let component: HaldaAutodComponent;
  let fixture: ComponentFixture<HaldaAutodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaAutodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaAutodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

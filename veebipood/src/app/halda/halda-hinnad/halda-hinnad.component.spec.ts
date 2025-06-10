import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaHinnadComponent } from './halda-hinnad.component';

describe('HaldaHinnadComponent', () => {
  let component: HaldaHinnadComponent;
  let fixture: ComponentFixture<HaldaHinnadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaHinnadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaHinnadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

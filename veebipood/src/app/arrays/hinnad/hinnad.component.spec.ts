import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinnadComponent } from './hinnad.component';

describe('HinnadComponent', () => {
  let component: HinnadComponent;
  let fixture: ComponentFixture<HinnadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HinnadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HinnadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

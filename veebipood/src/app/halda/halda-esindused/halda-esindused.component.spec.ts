import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaEsindusedComponent } from './halda-esindused.component';

describe('HaldaEsindusedComponent', () => {
  let component: HaldaEsindusedComponent;
  let fixture: ComponentFixture<HaldaEsindusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaEsindusedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaEsindusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

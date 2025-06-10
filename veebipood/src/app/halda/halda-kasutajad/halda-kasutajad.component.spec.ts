import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaKasutajadComponent } from './halda-kasutajad.component';

describe('HaldaKasutajadComponent', () => {
  let component: HaldaKasutajadComponent;
  let fixture: ComponentFixture<HaldaKasutajadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaKasutajadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaKasutajadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

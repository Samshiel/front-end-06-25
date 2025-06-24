import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaKasutajaComponent } from './muuda-kasutaja.component';

describe('MuudaKasutajaComponent', () => {
  let component: MuudaKasutajaComponent;
  let fixture: ComponentFixture<MuudaKasutajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaKasutajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaKasutajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

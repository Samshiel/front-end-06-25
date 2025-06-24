import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksKasutajaComponent } from './yks-kasutaja.component';

describe('YksKasutajaComponent', () => {
  let component: YksKasutajaComponent;
  let fixture: ComponentFixture<YksKasutajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksKasutajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksKasutajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaTootajaComponent } from './muuda-tootaja.component';

describe('MuudaTootajaComponent', () => {
  let component: MuudaTootajaComponent;
  let fixture: ComponentFixture<MuudaTootajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaTootajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaTootajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

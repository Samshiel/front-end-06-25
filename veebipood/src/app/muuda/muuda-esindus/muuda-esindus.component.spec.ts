import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaEsindusComponent } from './muuda-esindus.component';

describe('MuudaEsindusComponent', () => {
  let component: MuudaEsindusComponent;
  let fixture: ComponentFixture<MuudaEsindusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaEsindusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaEsindusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

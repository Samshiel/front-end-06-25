import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaHindComponent } from './muuda-hind.component';

describe('MuudaHindComponent', () => {
  let component: MuudaHindComponent;
  let fixture: ComponentFixture<MuudaHindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaHindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaHindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

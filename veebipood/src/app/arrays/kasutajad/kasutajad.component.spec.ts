import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasutajadComponent } from './kasutajad.component';

describe('KasutajadComponent', () => {
  let component: KasutajadComponent;
  let fixture: ComponentFixture<KasutajadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KasutajadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KasutajadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

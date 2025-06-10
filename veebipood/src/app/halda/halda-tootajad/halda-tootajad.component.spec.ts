import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaTootajadComponent } from './halda-tootajad.component';

describe('HaldaTootajadComponent', () => {
  let component: HaldaTootajadComponent;
  let fixture: ComponentFixture<HaldaTootajadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaTootajadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaTootajadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

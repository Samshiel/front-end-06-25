import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaTootedComponent } from './halda-tooted.component';

describe('HaldaTootedComponent', () => {
  let component: HaldaTootedComponent;
  let fixture: ComponentFixture<HaldaTootedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaTootedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaTootedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

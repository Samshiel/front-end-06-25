import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaHomeComponent } from './halda-home.component';

describe('HaldaHomeComponent', () => {
  let component: HaldaHomeComponent;
  let fixture: ComponentFixture<HaldaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

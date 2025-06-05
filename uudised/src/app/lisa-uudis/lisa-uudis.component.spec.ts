import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaUudisComponent } from './lisa-uudis.component';

describe('LisaUudisComponent', () => {
  let component: LisaUudisComponent;
  let fixture: ComponentFixture<LisaUudisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaUudisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaUudisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaTegelaneComponent } from './lisa-tegelane.component';

describe('LisaTegelaneComponent', () => {
  let component: LisaTegelaneComponent;
  let fixture: ComponentFixture<LisaTegelaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaTegelaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaTegelaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

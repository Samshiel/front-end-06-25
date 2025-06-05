import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvutidComponent } from './arvutid.component';

describe('ArvutidComponent', () => {
  let component: ArvutidComponent;
  let fixture: ComponentFixture<ArvutidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArvutidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArvutidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

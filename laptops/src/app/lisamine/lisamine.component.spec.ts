import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisamineComponent } from './lisamine.component';

describe('LisamineComponent', () => {
  let component: LisamineComponent;
  let fixture: ComponentFixture<LisamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisamineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

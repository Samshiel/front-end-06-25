import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksHindComponent } from './yks-hind.component';

describe('YksHindComponent', () => {
  let component: YksHindComponent;
  let fixture: ComponentFixture<YksHindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksHindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksHindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

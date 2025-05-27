import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinkekaardidComponent } from './kinkekaardid.component';

describe('KinkekaardidComponent', () => {
  let component: KinkekaardidComponent;
  let fixture: ComponentFixture<KinkekaardidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KinkekaardidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinkekaardidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

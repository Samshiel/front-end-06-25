import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaenukalkulaatorComponent } from './laenukalkulaator.component';

describe('LaenukalkulaatorComponent', () => {
  let component: LaenukalkulaatorComponent;
  let fixture: ComponentFixture<LaenukalkulaatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaenukalkulaatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaenukalkulaatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

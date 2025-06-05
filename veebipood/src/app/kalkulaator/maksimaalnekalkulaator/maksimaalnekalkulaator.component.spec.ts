import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaksimaalnekalkulaatorComponent } from './maksimaalnekalkulaator.component';

describe('MaksimaalnekalkulaatorComponent', () => {
  let component: MaksimaalnekalkulaatorComponent;
  let fixture: ComponentFixture<MaksimaalnekalkulaatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaksimaalnekalkulaatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaksimaalnekalkulaatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

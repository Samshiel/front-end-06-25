import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavakalkulaatorComponent } from './tavakalkulaator.component';

describe('TavakalkulaatorComponent', () => {
  let component: TavakalkulaatorComponent;
  let fixture: ComponentFixture<TavakalkulaatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TavakalkulaatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TavakalkulaatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

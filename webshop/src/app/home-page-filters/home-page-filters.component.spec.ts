import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFiltersComponent } from './home-page-filters.component';

describe('HomePageFiltersComponent', () => {
  let component: HomePageFiltersComponent;
  let fixture: ComponentFixture<HomePageFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

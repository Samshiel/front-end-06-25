import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksTootajaComponent } from './yks-tootaja.component';

describe('YksTootajaComponent', () => {
  let component: YksTootajaComponent;
  let fixture: ComponentFixture<YksTootajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksTootajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksTootajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

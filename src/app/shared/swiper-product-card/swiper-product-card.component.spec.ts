import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperProductCardComponent } from './swiper-product-card.component';

describe('SwiperProductCardComponent', () => {
  let component: SwiperProductCardComponent;
  let fixture: ComponentFixture<SwiperProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

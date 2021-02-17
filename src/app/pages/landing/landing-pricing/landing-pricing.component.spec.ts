import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPricingComponent } from './landing-pricing.component';

describe('LandingPricingComponent', () => {
  let component: LandingPricingComponent;
  let fixture: ComponentFixture<LandingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

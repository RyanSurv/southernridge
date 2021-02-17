import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRoomsComponent } from './landing-rooms.component';

describe('LandingRoomsComponent', () => {
  let component: LandingRoomsComponent;
  let fixture: ComponentFixture<LandingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

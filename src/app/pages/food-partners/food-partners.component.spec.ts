import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPartnersComponent } from './food-partners.component';

describe('FoodPartnersComponent', () => {
  let component: FoodPartnersComponent;
  let fixture: ComponentFixture<FoodPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

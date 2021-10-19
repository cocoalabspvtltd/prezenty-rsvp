import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiftVouchersComponent } from './list-gift-vouchers.component';

describe('ListGiftVouchersComponent', () => {
  let component: ListGiftVouchersComponent;
  let fixture: ComponentFixture<ListGiftVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGiftVouchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGiftVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

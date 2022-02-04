import { ApiService } from 'app/shared/api.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { element } from "protractor";
@Component({
  selector: 'app-food-partners',
  templateUrl: './food-partners.component.html',
  styleUrls: ['./food-partners.component.css']
})
export class FoodPartnersComponent implements OnInit {

  gift: boolean;
  food: boolean;
  baseUrl: any;
  foodList: any;
  foodlength: any;
  hide: boolean;
  show: boolean;
  itemIndex: number;
  giftVoucherList: any;
  giftvoucherlength: any;
  giftbaseUrl: any;
  baseUrlBg: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.gift = false;
    this.food = false;
  }

  ngOnInit(): void {
    this.listFoodCoupons();
  }

  showGiftVoucher() {
    this.gift = true;
    this.food = false;
  }
  showFoodVoucher() {
    this.gift = false;
    this.food = true;
  }
  hideReply() {
    this.hide = false;
    this.show = false;
    this.itemIndex = -1;
  }
  showReply(index) {
    this.itemIndex = index;
    this.show = true;
    this.hide = true;
  }
  listFoodCoupons() {
    // getfoodCoupons
    this.apiService.getfoodVouchers().subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.baseUrl = res.brand_image_location;
          this.foodList = res["list"];
          this.foodlength = this.foodList.length;
          console.log(this.foodlength);
        } else {
        }
      },
      (error) => {}
    );
  }


}

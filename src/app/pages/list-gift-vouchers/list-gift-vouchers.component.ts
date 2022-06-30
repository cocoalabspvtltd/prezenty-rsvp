import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
declare let Razorpay: any;
declare var $:any;
declare var MediaRecorder: any;

@Component({
  selector: 'app-list-gift-vouchers',
  templateUrl: './list-gift-vouchers.component.html',
  styleUrls: ['./list-gift-vouchers.component.css']
})
export class ListGiftVouchersComponent implements OnInit {
  giftVoucherList: any;
  baseUrl: any;
  giftPayForm
  AmounttPayForm: any;
  submitted: boolean;
  clicked: boolean;
  key: any;
  orderResponse: any;
  orderId: any;
  amount: any;
  RAZORPAY_OPTIONS:any;

  spinner: any;
  rzppay: any;
  razorpayResponse: any;
  showModal: boolean;
  event_id: string;
  voucherLength: any;
  mediaRecorder: any;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.AmounttPayForm = this.fb.group({
      gift_amount: ['',[Validators.required]]
   })
   this.event_id = localStorage.getItem('eventId');
  }
  ngOnInit() {
    $(".modal-backdrop").removeClass('modal-backdrop');
    this.listGiftItems();
    // this.mediaRecorder.stop();

  }
  get paymntfrm() {
    return this.AmounttPayForm.controls;
  }
  listGiftItems(){
  this.apiService.getvouchers(this.event_id).subscribe((res:any)=>{
    if (res) {
      this.baseUrl = res.baseUrl;
    this.giftVoucherList = res['Gifts'];
    this.voucherLength = this.giftVoucherList.length;
     } else {
    }
  }, error => {
  })
}
detailPage(){
  this.router.navigateByUrl('/send-gift')
}

terms(id){
  window.open('https://prezenty.in/terms_and_conditions_gift/' + id)
}
}

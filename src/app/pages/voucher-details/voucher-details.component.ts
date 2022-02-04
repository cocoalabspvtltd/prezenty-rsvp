import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
declare let Razorpay: any;
declare var $:any;
@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.css']
})
export class VoucherDetailsComponent implements OnInit {
  baseUrl: any;
  giftVoucherDetail: any;
  title: any;
  image_url: any;
  expiry_date: any;
  price: any;
  id: any;
  RAZORPAY_OPTIONS:any;

  spinner: any;
  rzppay: any;
  razorpayResponse: any;
  key: any;
  submitted: boolean;
  clicked: boolean;
  AmounttPayForm: any;
  orderId: string;
  amount: number;
  showModal: boolean;
  eventId: string;
  va_number: any;
  participant_id: string;
  reference_id: string;
  encodedDynamicQrCode: any;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.eventId = localStorage.getItem('eventId');
        this.participant_id = localStorage.getItem('pid');
        console.log(this.id)
        this.AmounttPayForm = this.fb.group({
          gift_amount:['',[Validators.required,Validators.pattern("^[0-9]*$")]]
       })
  }
  ngOnInit(): void {
    this.voucherdetails();

  }

  get paymntfrm() {
    return this.AmounttPayForm.controls;
  }
  voucherdetails(){
    this.apiService.getvoucherDetail(this.id).subscribe((res:any)=>{
      console.log(res)
      if (res) {
        this.baseUrl = res.baseUrl;
      this.title = res['detail'].title;
      this.image_url = res['detail'].image_url;
      this.expiry_date = res['detail'].expiry_date;
      this.price = res['detail'].price;
       } else {
      }
    }, error => {
    })
  }

  submitPayment(){
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.AmounttPayForm.invalid) {
        this.clicked = false;
    }
    let formValue =  this.AmounttPayForm.value
    if(this.AmounttPayForm.invalid === false){
      this.router.navigateByUrl('/payment/'+ this.AmounttPayForm.value.gift_amount)
      }

  }
}
// createDecentroUpi

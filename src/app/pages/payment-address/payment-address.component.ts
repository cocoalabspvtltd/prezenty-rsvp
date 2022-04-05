import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "app/shared/api.service";
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;
declare let Razorpay: any;

@Component({
  selector: "app-payment-address",
  templateUrl: "./payment-address.component.html",
  styleUrls: ["./payment-address.component.css"],
})
export class PaymentAddressComponent implements OnInit {
  submitAddressForm: any;
  submitted: boolean;
  clicked: boolean;
  evntid: string;
  address: any;
  name: any;
  email: any;
  phone: any;
  showaddress: any;
  showpaymntbox: boolean;
  key: any;
  participant_email: any;
  event_id: any;
  amount: any;
  orderId: any;
  RAZORPAY_OPTIONS: any;
  rzppay: any;
  razorpayResponse: any;
  showModal: boolean;
  loading: boolean;
  parti_address: any;
  baseUrl: any;
  title: any;
  image_url: any;
  expiry_date: any;
  price: any;
  id: string;
  giftAmount: string;
  showGiftDetail: boolean;
  update: boolean;
  gift_id: any;
  pid: string;
  zone: any;
  reference_id: string;
  eventId: string;
  va_number: any;
  participant_id: string;
  encodedDynamicQrCode: any;
  upiUri: any;
  mob: boolean;
  web: boolean;
  callTimeOut: boolean;
  display: string;
  errorMessage: any;
  constructor(
    private fb: FormBuilder,
    private _ngZone: NgZone,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.eventId = localStorage.getItem("eventId");
    this.participant_id = localStorage.getItem("pid");

    this.showpaymntbox = false;
    this.showGiftDetail = true;
    this.evntid = localStorage.getItem("eventId");
    this.giftAmount = localStorage.getItem("giftAmount");
    this.gift_id = localStorage.getItem("gift_id");
    this.pid = localStorage.getItem("pid");
    this.handleEventDetail();
  }
  ngOnInit(): void {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    this.spinner.show();
    this.checkMobileorDesktop();
    $("#timeoutModal").modal("hide");

  }
  checkMobileorDesktop() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var element = document.getElementById('text');
    if (isMobile) {
      this.mob = true;
      this.web = false;
    } else {
      this.web = true;
      this.mob = false;
    }
  }
  timer(minute) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  handleEventDetail() {
    this.apiService.getEventDetail(this.eventId).subscribe(
      (res: any) => {
        if (res) {
          this.amount = this.route.snapshot.paramMap.get("id");
          var date = Date.now();
          this.reference_id = this.eventId + "-" + "GIFT" + "-" + date;
          var data = {
            reference_id: this.reference_id,
            payee_account: res.detail.va_number,
            amount: this.amount,
            purpose_message: "test",
            participant_id: this.participant_id,
            user_id: "",
            event_id: this.eventId,
            voucher_type: "GIFT",
          };
          this.apiService.createDecentroUpi(data).subscribe((res: any) => {
            if(res.success == true){
            var dec_id = res.detail.id;
            this.encodedDynamicQrCode = res.detail.encodedDynamicQrCode;
            this.upiUri =res.detail.upiUri;
            this.spinner.hide();
              this.timer(10);
              var i = setInterval(
                  () =>
                    this.apiService.transactionStatus(dec_id).subscribe((res: any) => {
                      if(res.detail.status != 'PENDING'){
                        $("#successModal").modal("show");
                        clearInterval(i);
                      }
                    }),
                  2000
                );
               setTimeout(() => {
                clearInterval(i);
                    this.callTimeOut  = true;
                    this.spinner.hide();
                    $("#timeoutModal").modal("show");
               }, 600000);


          }
          else{
            $("#ErrorModal").modal("show");
            this.spinner.hide();
             this.errorMessage = res.detail.message;
          }
          });

        } else {
        }

      },

      (error) => {}
    );

  }

  payNow(){
    window.location.href = this.upiUri;
    $("#successModal").modal("show");

  }
  closeErrorModal(){
    $("#ErrorModal").modal("hide");
    this.router.navigateByUrl("/dashboard");
  }

  closeSuccessModal() {
    $("#successModal").modal("hide");
    this.router.navigateByUrl("/dashboard");
  }
  closeTimeoutModal(){
    $("#timeoutModal").modal("hide");
    this.router.navigateByUrl("/voucher");
  }
}

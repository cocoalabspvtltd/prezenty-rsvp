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
  amount: number;
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
  constructor(
    private fb: FormBuilder,
    private _ngZone: NgZone,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.showpaymntbox = false;
    this.showGiftDetail = true;
    this.evntid = localStorage.getItem("eventId");
    this.giftAmount = localStorage.getItem("giftAmount");
    this.gift_id = localStorage.getItem("gift_id");
    this.pid = localStorage.getItem("pid");

    this.eventDetailsList();
    this.handlePayment();
  }
  ngOnInit(): void {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    this.getKey();
    this.voucherdetails();
    this.parti_address = JSON.parse(localStorage.getItem("participantAddress"));
  }
  handlePayment() {
    this.submitAddressForm = this.fb.group({
      name: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"),
        ],
      ],
      address: ["", [Validators.required]],
      phone: ["", [Validators.required]],
    });
  }
  voucherdetails() {
    this.apiService.getvoucherDetail(this.id).subscribe(
      (res: any) => {
        if (res) {
          this.baseUrl = res.baseUrl;
          this.title = res["detail"].title;
          this.image_url = res["detail"].image_url;
          this.expiry_date = res["detail"].expiry_date;
        } else {
        }
      },
      (error) => {}
    );
  }
  eventDetailsList() {
    this.apiService.getEventdetailsList(this.pid).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.address = res["detail"].address;
          this.name = res["detail"].name;
          this.participant_email = res["detail"].email;
          this.phone = res["detail"].phone;
          this.event_id = res["detail"].event_id;
        } else {
        }
      },
      (error) => {}
    );
  }
  getKey() {
    this.apiService.getPaymentkey().subscribe((res: any) => {
      this.key = res.apiKey;
      console.log(this.key)
    });
  }
  get paymntfrm() {
    return this.submitAddressForm.controls;
  }

  showAddress() {
    if (this.parti_address.address != "none") {
      this.showaddress = false;
      this.showpaymntbox = true;
    } else {
      this.showaddress = true;
      this.showpaymntbox = false;
    }
    this.showGiftDetail = false;
  }

  goToPaymentPage() {
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.submitAddressForm.invalid) {
      this.clicked = false;
    }
    if (
      this.submitAddressForm.invalid === false &&
      this.showaddress === true &&
      this.parti_address.address === "none"
    ) {
      this.showaddress = false;
      let formValue = this.submitAddressForm.value;
      this.address = {
        name: formValue.name,
        email: formValue.email,
        address: formValue.address,
        phone: formValue.phone,
      };
      formData.append("email", formValue.email);
      formData.append("name", formValue.name);
      formData.append("event_id", this.evntid);
      formData.append("participant_id", this.pid);

      if (this.submitAddressForm.invalid === false) {
        this.apiService
          .updateParticipantEmail(formData)
          .subscribe((res: any) => {
            if (res.success == 1) {
              this.showpaymntbox = true;
              this.eventDetailsList();
            }
          });
      }
      localStorage.setItem("participantAddress", JSON.stringify(this.address));
    } else {
      this.showpaymntbox = false;
    }
  }

  GiftAmount() {
    this.loading = true;
    this.submitted = true;
    this.clicked = true;
    this.spinner.show();
    const formData = new FormData();
    console.log(this.participant_email);
    this.apiService
      .getOrderId(
        this.participant_email,
        this.giftAmount,
        this.gift_id,
        this.event_id
      )
      .subscribe((res: any) => {
        this.amount = res.convertedAmount;
        this.orderId = res.orderId;
        if (this.orderId) {
          this.spinner.hide();
          this.RAZORPAY_OPTIONS = {
            key: "",
            amount: "",
            name: "Prezenty",
            currency: "INR",
            order_id: "",
            customer_id: "",
            description: "App Payment",
                  prefill: {
              name: "",
              email: "",
              contact: "",
              method: "",
            },
            notes: {
              type: "donate",
              eid: this.evntid,
              gid: this.gift_id,
              pid: this.pid,
            },
            modal: {},

          };
          this.RAZORPAY_OPTIONS.amount = this.amount;
          this.RAZORPAY_OPTIONS.key = this.key;
          this.RAZORPAY_OPTIONS.order_id = this.orderId;
          this.loading = false;
          // this.RAZORPAY_OPTIONS.customer_id = this.customer_id;
          this.RAZORPAY_OPTIONS["handler"] =
            this.razorPaySuccessHandler.bind(this);
          this.rzppay = new Razorpay(this.RAZORPAY_OPTIONS);
          this.rzppay.open();
          this.submitted = false;
          this.clicked = false;
        }
      });
  }
  public razorPaySuccessHandler(response) {
    this._ngZone.run(() => {
      $('#successModal').modal('show');
    });
    this.razorpayResponse = "Razorpay Response";
    if (response.razorpay_payment_id) {
    }
  }
  closeSuccessModal() {
    $('#successModal').modal('hide');
    this.router.navigateByUrl('/dashboard');
  }
}

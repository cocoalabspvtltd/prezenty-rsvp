import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
declare var gapi:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
  RSVPForm: any;
  receiveFood: boolean;
  foodCat: boolean;
  disableAdrress: boolean;
  applicableStatus: any;
  submitted: boolean;
  clicked: boolean;
  phoneerror: boolean;
  event_id: any;
  imageFilesLocation: any;
  image_url: any;
  is_attending: any;
  need_food: any;
  is_veg: any;
  need_gift: any;
  evntDetail: any;
  address:any;
  eventIdList:any[]=[];
  public sessionidList:any[]=[];
  title: any;
  menuOrGifts: any;
  giftarray:any[]=[];
  is_vegNonveg: boolean;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router,private toastr: ToastrService) {
    this.applicableStatus = false;
    this.sessionidList = [];
    this.RSVPForm = this.fb.group({
      physically_attend: ['',[Validators.required]],
      receive_foods:[''],
      veg_nonnVeg:[''],
      attended_members:[''],
      phone_number: ['',[Validators.required]],
      email: ['',[Validators.required]],
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      not_applicable:['']
    })
  }
  ngOnInit(): void {
    this.sessionidList = JSON.parse(localStorage.getItem('id'));
    console.log(this.sessionidList);
    this.route.queryParams.subscribe(params =>{
      this.event_id =params['event_id'];
      console.log(this.sessionidList);
      if(this.sessionidList && this.sessionidList.length > 0){
        if(this.sessionidList.find(i => i.id == params['event_id'])){
          this.router.navigateByUrl('/dashboard');
        }
      }else{
        console.log("TEST TEST::DEMO");
        this.sessionidList = [];
      }

    })

   localStorage.setItem('eventId' ,this.event_id);
    this.eventDetails();
    // gapi.load("client:auth2", function() {
    //   gapi.auth2.init({client_id: "523157720270-ig1k9m3a8v6pabsh3vnt1mqcjcfgfqm0.apps.googleusercontent.com"});
    // });
  }
  joinThisEvent(){
    $('#rsvpModal').modal('show');
  }
  closeRsvpModal(){
    $('#rsvpModal').modal('hide');
    this.RSVPForm.reset();
    this.submitted = false;
    this.loading= false;
    this.receiveFood = false;
    this.foodCat = false;
  }
  eventDetails(){
    this.apiService.getEventDetail(this.event_id).subscribe((res:any)=>{
      if (res) {
        console.log(res.menuOrGifts)
        this.evntDetail = res['detail'];
      this.imageFilesLocation = res.imageFilesLocation;
      this.image_url = res['detail'].image_url;
      this.title =res['detail'].title;
      this.menuOrGifts = res.menuOrGifts;
      var veg = this.menuOrGifts.filter(item=> item.is_veg == 1);
      var nonveg = this.menuOrGifts.filter(item=> item.is_non_veg == 1);
      console.log(veg)
      console.log(nonveg)
      if(veg.length >= 1 && nonveg.length >=1){
        this.is_vegNonveg = true;

      }
      else{
        this.is_vegNonveg = false;
        this.RSVPForm.controls['veg_nonnVeg'].clearValidators();
        this.RSVPForm.controls['veg_nonnVeg'].updateValueAndValidity();
           }
       } else {
      }
    }, error => {
    })
  }
  changePhysicallyAttend(){
   if(this.RSVPForm.value.physically_attend === 'no'){
    this.submitted = false;
    this.loading = false;
     this.receiveFood = true;
     this.RSVPForm.controls['receive_foods'].setValidators([Validators.required])
     this.is_attending = 0;

   }
   else{
    this.submitted = false;
    this.loading = false;
     this.receiveFood = false;
     this.RSVPForm.controls['receive_foods'].clearValidators();
     this.RSVPForm.controls['receive_foods'].updateValueAndValidity();
     this.RSVPForm.value.receive_foods = '';
     this.is_attending = 1;
   }
  }
  get rsvpfrm() {
    return this.RSVPForm.controls;
  }
  checkphoneNumValidation(){
    if(this.RSVPForm.value.phone_number){
    if(this.RSVPForm.value.phone_number.length < 8){
      this.phoneerror = true;
    }
    else{
      this.phoneerror = false;
    }
  }
  }
  changereceiveFood(){
    if(this.RSVPForm.value.receive_foods === 'yes'){
      this.need_food = 1;
      console.log(this.need_gift)
      this.need_gift = 1;
      this.submitted = false;
      this.loading = false;
      this.foodCat = true;
      this.RSVPForm.controls['veg_nonnVeg'].setValidators([Validators.required]);
      this.RSVPForm.controls['attended_members'].setValidators([Validators.required,Validators.pattern("^[0-9]*$")]);
      this.RSVPForm.controls['name'].setValidators([Validators.required]);
      this.RSVPForm.controls['email'].setValidators([Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]);
      this.RSVPForm.controls['phone_number'].setValidators([Validators.required,Validators.pattern("^[0-9]*$")]);
      this.RSVPForm.controls['address'].setValidators([Validators.required])
    }
    else{
      this.need_food = 0;
      this.need_gift = 0;
      console.log(this.need_gift)
      this.submitted = false;
      this.loading = false;
      this.foodCat = false;
      this.RSVPForm.controls['veg_nonnVeg'].setValidators([Validators.required]);
      this.RSVPForm.controls['attended_members'].setValidators([Validators.required,,Validators.pattern("^[0-9]*$")]);
      this.RSVPForm.controls['name'].setValidators([Validators.required]);
      this.RSVPForm.controls['email'].setValidators([Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]);
      this.RSVPForm.controls['phone_number'].setValidators([Validators.required,Validators.pattern("^[0-9]*$")]);
      this.RSVPForm.controls['address'].setValidators([Validators.required])
    }
  }
  changeNotApplicable(event){
   this.applicableStatus = event.target.checked;
    if(this.applicableStatus === true){
      $('#first').addClass('hide');
      $('#second').addClass('hide');
      this.need_gift = 0;
      this.submitted = false;
      this.loading = false;
      this.disableAdrress = true;
      this.RSVPForm.controls['veg_nonnVeg'].clearValidators();
      this.RSVPForm.controls['veg_nonnVeg'].updateValueAndValidity();
      this.RSVPForm.controls['attended_members'].clearValidators();
      this.RSVPForm.controls['attended_members'].updateValueAndValidity();
      this.RSVPForm.controls['name'].setValidators([Validators.required]);
      this.RSVPForm.controls['email'].setValidators([Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]);
      // this.RSVPForm.controls['name'].clearValidators();
      // this.RSVPForm.controls['name'].updateValueAndValidity();
      // this.RSVPForm.controls['email'].clearValidators();
      // this.RSVPForm.controls['email'].updateValueAndValidity();
      this.RSVPForm.controls['phone_number'].clearValidators();
      this.RSVPForm.controls['phone_number'].updateValueAndValidity();
      this.RSVPForm.controls['address'].clearValidators();
      this.RSVPForm.controls['address'].updateValueAndValidity();
      console.log("reqyured");

    }
    else{
      $('#first').removeClass('hide');
      $('#second').removeClass('hide');
      this.need_gift = 1;
      this.submitted = false;
      this.loading = false;
        this.disableAdrress = false;
        this.RSVPForm.controls['veg_nonnVeg'].setValidators([Validators.required]);
        this.RSVPForm.controls['attended_members'].setValidators([Validators.required,Validators.pattern("^[0-9]*$")]);
        this.RSVPForm.controls['name'].setValidators([Validators.required]);
        this.RSVPForm.controls['email'].setValidators([Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]);
        this.RSVPForm.controls['phone_number'].setValidators([ [Validators.required,Validators.pattern("^[0-9]*$")]]);
        this.RSVPForm.controls['address'].setValidators([Validators.required])
      }
  }
  submitRSVP(e){
    console.log("jhgjhg")
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.RSVPForm.invalid) {
        this.clicked = false;
    }
    this.checkphoneNumValidation();
    let formValue =  this.RSVPForm.value
    if(formValue.veg_nonnVeg === 'veg'){
      this.is_veg = 1;
      formData.append('is_veg',this.is_veg);
    }
    else{
      this.is_veg = 0;
      formData.append('is_veg',this.is_veg);
    }
    formData.append('is_attending',this.is_attending)
    formData.append('need_food',this.need_food);
    formData.append('members_count',formValue.attended_members)
    formData.append('phone',formValue.phone_number)
    formData.append('email',formValue.email)
    formData.append('name',formValue.name)
    formData.append('address',formValue.address)
    formData.append('need_gift',this.need_gift)
    formData.append('event_id',this.event_id);
    if(formValue.address){
      console.log(formValue.address)
    this.address ={
      name:formValue.name,
      email:formValue.email,
      address:formValue.address,
      phone:formValue.phone_number,
    }
  }
  if(!formValue.address){
    this.address ={
      name:'none',
      email:'none',
      address:'none',
      phone:'none',
    }
  }
  console.log(this.RSVPForm.controls);
  console.log(this.RSVPForm.invalid)
    if(this.RSVPForm.invalid === false){
      localStorage.setItem('participantAddress',JSON.stringify(this.address))
      this.loading = true;
      this.apiService.submitRSVPForm(formData).subscribe((res:any)=>{
        console.log(res)
        if (res.success == 1) {
          if(formValue.email){
            var OneSignal = window['OneSignal'] || [];
             OneSignal.sendTag("user_id", formValue.email);
             localStorage.setItem('participantEmail',formValue.email)
            }
          this.RSVPForm.reset();
          this.loading = false;
          $('#rsvpModal').modal('show');
          this.submitted = false;
          this.clicked = false;
          console.log(this.event_id);
          this.sessionidList.push({id: this.event_id});

         localStorage.setItem('id', JSON.stringify(this.sessionidList));
          localStorage.setItem('pid',res['detail'].id);
          this.router.navigateByUrl('/dashboard');
        } else {
        }
      }, error => {
      })
    }
}
}

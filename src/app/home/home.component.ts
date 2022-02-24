import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
import { ToastrService } from 'ngx-toastr';
import {DatePipe} from '@angular/common';
declare var $:any;
import * as moment from 'moment';

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
  veg: any;
  nonveg: any;
  physically_attend: boolean;
  eventDate: any;
  currentDtae: string;
  eventStatus: boolean;
  baseUrlVideo: any;
  video_file: any;
  time: any;
  eventTime: string;
  created_by: any;
  EventDate: any;
  constructor(private fb: FormBuilder,private datePipe: DatePipe,private route:ActivatedRoute,private apiService:ApiService,private router:Router,private toastr: ToastrService) {
    this.applicableStatus = false;
    this.sessionidList = [];
    this.RSVPForm = this.fb.group({
      physically_attend: ['',[Validators.required]],
      receive_foods:[''],
      phone_number: ['',[Validators.required]],
      email: ['',[Validators.required]],
      name:['',[Validators.required]],
      address:['',[Validators.required]],
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
    var date = new Date();
    this.currentDtae = this.datePipe.transform(date,"yyyy-MM-dd"); //output : 2018-02-13
    this.apiService.getEventDetail(this.event_id).subscribe((res:any)=>{
      if (res) {
        console.log(res.menuOrGifts)
        this.evntDetail = res['detail'];
        this.title = this.evntDetail.title;
        this.time = this.evntDetail.time;
        this.created_by = this.evntDetail.created_by;
        this.EventDate = this.evntDetail.created_at;
        this.eventTime = this.time = moment(this.time, ["HH:mm"]).format("hh:mm A");
        console.log(this.eventTime);
      if(res.detail.video_file){
        this.baseUrlVideo = res.baseUrlVideo;
        this.video_file = res.detail.video_file;
       }
       else{
        this.imageFilesLocation = res.imageFilesLocation;
        this.image_url = res.detail.image_url;

       }
      this.title =res['detail'].title;
      this.menuOrGifts = res.menuOrGifts;
      this.eventDate = res['detail'].date;
      console.log(this.currentDtae)
      console.log(this.eventDate)

      if(this.eventDate >= this.currentDtae){
        this.eventStatus = true;
        console.log("ongoing")
      }
      else{
        this.eventStatus = false;

        console.log("finished")
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
     this.RSVPForm.controls['name'].setValidators([Validators.required]);
     this.RSVPForm.controls['email'].setValidators([Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")]);
     this.RSVPForm.controls['phone_number'].setValidators([Validators.required,Validators.pattern("^[0-9]*$")]);
     this.RSVPForm.controls['address'].setValidators([Validators.required])

   }
   else{
    this.submitted = false;
    this.loading = false;
     this.receiveFood = false;
     this.physically_attend = true;
     this.RSVPForm.controls['receive_foods'].clearValidators();
     this.RSVPForm.controls['receive_foods'].updateValueAndValidity();
     this.RSVPForm.controls['name'].clearValidators();
     this.RSVPForm.controls['name'].updateValueAndValidity();
     this.RSVPForm.controls['email'].clearValidators();
     this.RSVPForm.controls['email'].updateValueAndValidity();
     this.RSVPForm.controls['phone_number'].clearValidators();
     this.RSVPForm.controls['phone_number'].updateValueAndValidity();
     this.RSVPForm.controls['address'].clearValidators();
     this.RSVPForm.controls['address'].updateValueAndValidity();
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
      this.submitted = false;
      this.loading = false;
    }
    else{
      this.need_food = 0;
      this.submitted = false;
      this.loading = false;
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
    formData.append('is_attending',this.is_attending)
    formData.append('need_food',this.need_food);
    formData.append('phone',formValue.phone_number)
    formData.append('email',formValue.email.toLowerCase())
    formData.append('name',formValue.name)
    formData.append('address',formValue.address)
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
             OneSignal.sendTag("user_id", formValue.email.toLowerCase());
             localStorage.setItem('participantEmail',formValue.email.toLowerCase())
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

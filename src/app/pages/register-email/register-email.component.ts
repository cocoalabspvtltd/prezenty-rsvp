import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.css']
})
export class RegisterEmailComponent implements OnInit {
  registerEmailForm: any;
  submitted: boolean;
  clicked: boolean;
  evntid: string;
  event_id: any;
  participant_id: string;
  loading: boolean;

  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.evntid = localStorage.getItem('eventId');
    this.participant_id = localStorage.getItem('pid');

    this.handlePayment();
  }
  handlePayment(){
    this.registerEmailForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      name:['',Validators.required]
   })
  }
  get emailfrm() {
    return this.registerEmailForm.controls;
  }
  ngOnInit(): void {
  }
  registerEmail(){
    this.submitted = true;
    this.clicked = true;
    this.loading = true;
    const formData = new FormData();
    if (this.registerEmailForm.invalid) {
        this.clicked = false;
    }
    // this.event_id = 26;
    let formValue =  this.registerEmailForm.value
    formData.append('email',formValue.email);
    formData.append('name',formValue.name);
    formData.append('event_id',this.evntid);
    formData.append('participant_id',this.participant_id);

    if(this.registerEmailForm.invalid === false){
      this.apiService.updateParticipantEmail(formData).subscribe((res:any)=>{
        if (res.success == 1) {
          this.loading = true;
          console.log(res.detail['email']);
          var OneSignal = window['OneSignal'] || [];
          if(res){
           OneSignal.sendTag("user_id", res.detail['email']);
           this.router.navigateByUrl('/users')
           localStorage.setItem('participantEmail',res.detail['email'])
          }
        }
        })
    }
  }
}

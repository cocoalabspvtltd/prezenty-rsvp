import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  [x: string]: any;
  userList: any;
  evntid: string;
  participant_id: string;
  registerEmailForm: any;
  submitted: boolean;
  clicked: boolean;
  loading: boolean;
  participantEmail: string;

  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.evntid = localStorage.getItem('eventId');
    this.participant_id = localStorage.getItem('pid');
    console.log(this.participant_id)
    this.participantEmail = localStorage.getItem('participantEmail');
    console.log(this.participantEmail


    )
    this.handlePayment();
  }
  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.apiService.getUsers().subscribe((res:any)=>{
      console.log(res)
      if (res) {
      this.userList = res['list'];
      this.hostName= res.name;
      this.hostEmail = res.email;
      this.userList = this.userList.filter( item => item.email != this.participantEmail);
      console.log(this.userList)
       } else {
      }
    }, error => {
    })
  }


handlePayment(){
  this.registerEmailForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
 })
}
hostData(){
  localStorage.setItem('hostEmail',this.hostEmail);
  localStorage.setItem('hostName',this.hostName);
}
hostDataRemove(){
  localStorage.removeItem('hostEmail');
  localStorage.removeItem('hostName');
}
get emailfrm() {
  return this.registerEmailForm.controls;
}
exitChat(){
  console.log("exit")
  this.router.navigateByUrl('/dashboard')
}
groupChat(){
  this.router.navigateByUrl('/group-chat')
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

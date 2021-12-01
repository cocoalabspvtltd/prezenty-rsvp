import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
declare var OneSignal:any;
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  submitted: boolean;
  id: string;
  userDetailList: any;
  chatForm: any;
  receiver_email: any;
  senderEmail:any;
  event_id: string;
  chatMessages: any[] = [];
  clicked: boolean;
  created_at: any;
  message: any;
  modified_at: any;
  sender_email: any;
  status: any;
  time: any;
  participant_id: string;
  participantEmail: string;
  hostName: string;
  showblockedalert:any
  blocked_user: any;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.showblockedalert = false;

    this.chatForm = this.fb.group({
      chatmessage:['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.forEach((urlParams) => {
      this.id=urlParams['id'];
      this.blocked_user=urlParams['buser'];
    });
    this.participantEmail = localStorage.getItem('participantEmail');
    this.hostName = localStorage.getItem('hostName');
    this.participant_id = localStorage.getItem('pid');
    this.event_id =  localStorage.getItem('eventId');
    this.chatMessages = [];
     this.handleParticipantDetail();
     setInterval(() =>{
      // this.getChatMessage();
    },4000)


  }

handleParticipantDetail(){
  this.apiService.getParticipantDetail(this.id).subscribe((res:any)=>{
    if (res) {
    this.userDetailList = res['detail'];
    if(this.id != null){
      this.receiver_email = this.receiver_email;
      this.receiver_email = this.userDetailList.email;
    }
      else if(this.id == null){
        this.receiver_email = localStorage.getItem('hostEmail');
      }
     this.getChatMessage();
     } else {
    }
  }, error => {
  })
}
getChatMessage(){
  if(this.id != null){
  this.receiver_email = this.receiver_email;
  var sender_email = this.participantEmail;
  }
  else if(this.id == null){
    this.receiver_email = localStorage.getItem('hostEmail');
  }
  var sender_email = this.participantEmail;
  this.event_id = this.event_id;
  // this.event_id = '8';
  this.apiService.getPrivateChatMessages(this.receiver_email,this.participantEmail,this.event_id).subscribe((res:any)=>{
    this.chatMessages = res.list;
    this.chatMessages.sort(function(a, b) {
      return (a.id - b.id) || a.name.localeCompare(b.name);
  });

  }, error => {
  })
}

get chatfrm() {
  return this.chatForm.controls;
}
sentMessage(){
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.chatForm.invalid) {
     this.clicked = false;
    }
    var currentdate = new Date();
      const date = currentdate.getDate() + "-"+ (currentdate.getMonth()+1)  + "-" + currentdate.getFullYear();
      const time = currentdate.getHours() + ":"+ currentdate.getMinutes() + ":"+ currentdate.getSeconds();
    let formValue =  this.chatForm.value
    formData.append('message',formValue.chatmessage);
    formData.append('event_id',this.event_id);
    formData.append('sender_email',this.participantEmail);
    formData.append('receiver_email',this.receiver_email)
    formData.append('date',date)
    formData.append('time',time)
   console.log(this.participantEmail);
   console.log(this.receiver_email);
    if(this.chatForm.invalid === false){
      this.apiService.sendMessages(formData).subscribe((res:any)=>{
        if (res.success == 1) {
          this.chatForm.reset();
          this.getChatMessage();
        }
        else if(res.success == false){

          if(res.message = 'You are blocked by kichu@gmail.com'){

            this.showblockedalert = true;
            this.chatForm.reset();
          }
        }
        })
    }
  }


  blockUser(){
    const formData = new FormData();
    formData.append('event_id', this.event_id);
    formData.append('blocked_user_email', this.receiver_email);
    formData.append('blocked_by_user_email', this.participantEmail);
    this.apiService.blockUserMessage(formData).subscribe((res: any) => {
      this.blocked_user = 'true';

    })
  }

  UnblockUser(){
    const formData = new FormData();
    formData.append('event_id', this.event_id);
    formData.append('blocked_user_email', this.receiver_email);
    formData.append('blocked_by_user_email', this.participantEmail);
    this.apiService.unblockUserMessage(formData).subscribe((res: any) => {
      this.blocked_user = 'false';

    })
  }


}


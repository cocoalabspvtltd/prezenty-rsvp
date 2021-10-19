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
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.chatForm = this.fb.group({
      chatmessage:['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.participantEmail = localStorage.getItem('participantEmail');
    this.hostName = localStorage.getItem('hostName');
    this.participant_id = localStorage.getItem('pid');
    console.log(this.id)
    this.event_id =  localStorage.getItem('eventId');
    this.chatMessages = [];
     this.handleParticipantDetail();
     setInterval(() =>{
      this.getChatMessage();
    },4000)

    OneSignal.push(()=>{
      OneSignal.on('notificationDisplay',(event)=>{
        console.warn('OneSignal notification displayed:', event);
        this.message = event.content;
        var data = event.data;
        this.created_at = data.created_at;
        this.event_id = data.event_id;
        this.id = data.id;
        this.modified_at = data.modified_at;
        this.receiver_email = data.receiver_email;
        this.sender_email = data.sender_email;
        this.status = data.status;
        this.time = data.time;
        console.log(data)
        this.chatMessages.push({
          message : this.message,
          created_at:this.created_at,
          event_id : this.event_id,
          id : this.id,
          modified_at : this.modified_at,
          receiver_email : this.receiver_email,
          sender_email : this.sender_email,
          status : this.status,
          time : this.time,
        });

        console.log(this.chatMessages)
      });
});
  }

handleParticipantDetail(){
  this.apiService.getParticipantDetail(this.id).subscribe((res:any)=>{
    console.log(res)
    if (res) {
    this.userDetailList = res['detail'];
    this.receiver_email = this.userDetailList.email;
    console.log(this.receiver_email)
     this.getChatMessage();
     } else {
    }
  }, error => {
  })
}
getChatMessage(){
  console.log("kjj")
  if(this.id != null){
  this.receiver_email = this.receiver_email;
  var sender_email = this.participantEmail;
  }
  else if(this.id == null){
    this.receiver_email = localStorage.getItem('hostEmail');
  }
  console.log(this.receiver_email);
  var sender_email = this.participantEmail;
  this.event_id = this.event_id;
  // this.event_id = '8';
  console.log(this.id)
  this.apiService.getPrivateChatMessages(this.receiver_email,this.participantEmail,this.event_id).subscribe((res:any)=>{
    console.log(res);
    this.chatMessages = res.list;
    this.chatMessages.sort(function(a, b) {
      return (a.id - b.id) || a.name.localeCompare(b.name);
  });

  console.log(this.chatMessages);
    console.log(this.chatMessages)
  }, error => {
  })
}

get chatfrm() {
  return this.chatForm.controls;
}
sentMessage(){
  console.log("kj")
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.chatForm.invalid) {
     this.clicked = false;
    }
    var currentdate = new Date();
      const date = currentdate.getDate() + "-"+ (currentdate.getMonth()+1)  + "-" + currentdate.getFullYear();
      const time = currentdate.getHours() + ":"+ currentdate.getMinutes() + ":"+ currentdate.getSeconds();
      console.log(time)
    let formValue =  this.chatForm.value
    formData.append('message',formValue.chatmessage);
    formData.append('event_id',this.event_id);
    formData.append('sender_email',this.participantEmail);
    formData.append('receiver_email',this.receiver_email)
    formData.append('date',date)
    formData.append('time',time)
    console.log(this.chatForm.value);

    if(this.chatForm.invalid === false){
      console.log("aaaaaaaaaaaaa")
      this.apiService.sendMessages(formData).subscribe((res:any)=>{
        if (res.success == 1) {
          console.log(res.success);
          this.chatForm.reset();
          this.getChatMessage();
        }
        })
    }
  }



}


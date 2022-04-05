import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
declare var OneSignal:any;
@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {
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
  eventname: any;
  imageFilesLocation: any;
  image_url: any;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.chatForm = this.fb.group({
      chatmessage:['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.participantEmail = localStorage.getItem('participantEmail');
    this.participant_id = localStorage.getItem('pid');
    this.event_id =  localStorage.getItem('eventId');
    this.chatMessages = [];
     this.handleEventDetail();
    this.oneSignalmessagePush();
      setInterval(() =>{
      this.getChatMessage();
    },1000)
  }

  oneSignalmessagePush(){
    OneSignal.push(()=>{
      OneSignal.on('notificationDisplay',(event)=>{
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
      });
});
  }
handleEventDetail(){
  this.apiService.getEventDetail(this.event_id).subscribe((res:any)=>{
    if (res) {
    this.eventname = res['detail'].title
    this.imageFilesLocation = res.imageFilesLocation;
    this.image_url = res['detail'].image_url;

     this.getChatMessage();
     } else {
    }
  }, error => {
  })
}
getChatMessage(){
  this.event_id = this.event_id;
  this.apiService.getGroupMessages(this.event_id).subscribe((res:any)=>{
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
    formData.append('date',date)
    formData.append('time',time)
    if(this.chatForm.invalid === false){
      this.apiService.sendMessages(formData).subscribe((res:any)=>{
        this.chatForm.reset();
        if (res.success == 1) {
          this.chatForm.reset();
          this.getChatMessage();
        }
        })
    }
  }



}

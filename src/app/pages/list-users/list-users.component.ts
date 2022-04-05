import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
import { isBigIntLiteral } from 'typescript';
declare var $:any;

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userList: any;
  evntid: string;
  participant_id: string;
  registerEmailForm: any;
  submitted: boolean;
  clicked: boolean;
  loading: boolean;
  participantEmail: string;
  blockedUserList: any;
  user: boolean;
  blockuser: boolean;
  userListlength:any;
  hostEmail:any;
  hostName: any;
  blockeduserlength: any;
  userDetailList: any;
  uemail: any;
  uname: any;
  uphone: any;
  uaddress:any;
  userEmail: any;
  mob: boolean;
  web: boolean;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private apiService:ApiService,private router:Router) {
    this.evntid = localStorage.getItem('eventId');
    this.participant_id = localStorage.getItem('pid');
    this.participantEmail = localStorage.getItem('participantEmail');
    this.handlePayment();
  }
  ngOnInit(): void {
    this.listUsers();
    this.user = true;
    this.blockuser = false;
    this.checkMobileorDesktop();
  }

  listUsers(){
    this.apiService.getUsers(this.participantEmail).subscribe((res:any)=>{
      this.userList = res['list'];
      this.hostName= res.name;
      this.hostEmail = res.email;
      this.userList = this.userList.filter( item => item.email != this.participantEmail);
      this.userListlength = this.userList.length;

    }, error => {
    })
  }


handlePayment(){
  this.registerEmailForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
 })
}
showUserList(){
  this.user = true;
  this.blockuser = false;
  this.listUsers();
}
showBlockList(){
  this.user = false;
  this.blockuser = true;
  this.handleBlockedUsers();
}
handleBlockedUsers(){
  this.apiService.getBlockedUsers(this.evntid,this.participantEmail).subscribe((res:any)=>{
    if(res){
      this.blockedUserList = res['list'];
      this.blockeduserlength = this.blockedUserList.length;

    }
  })
}
goToChat(uid, eid){


  this.router.navigate(['/chat',uid, 'true']);

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
hostData(){
  localStorage.setItem('hostEmail',this.hostEmail);
  localStorage.setItem('hostName',this.hostName);
  this.router.navigate(['/chat']);

}
hostDataRemove(uid,is_blocked){
  localStorage.removeItem('hostEmail');
  localStorage.removeItem('hostName');
  this.router.navigate(['/chat',uid, is_blocked]);

}
get emailfrm() {
  return this.registerEmailForm.controls;
}
exitChat(){
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
openUserInfoModal(uid){
  $('#userinfoModal').modal('show');
  $('body').css('padding-right','0');
  this.apiService.getParticipantDetail(uid).subscribe(
    (res: any) => {
        this.userDetailList = res['detail'];
        this.uemail =  this.userDetailList.email;
        this.uname =  this.userDetailList.name;
        this.uphone =  this.userDetailList.phone;
        this.uaddress = this.userDetailList.address;
      })

}

closeuserModal(){
  $('#userinfoModal').modal('hide');

}
}

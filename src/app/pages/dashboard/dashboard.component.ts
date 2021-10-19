import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
declare var $:any;
declare var gapi:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  imageFilesLocation: any;
  image_url: any;
  evntid: string;
  evntDetail: any;

  constructor(private apiService:ApiService,private router:Router) {
    this.evntid = localStorage.getItem('eventId');
   }

  ngOnInit() {
    $(".modal-backdrop").removeClass('modal-backdrop');
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    this.eventDetails();
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "523157720270-ig1k9m3a8v6pabsh3vnt1mqcjcfgfqm0.apps.googleusercontent.com"});
    });
  }
  eventDetails(){
    this.apiService.getEventDetail(this.evntid).subscribe((res:any)=>{
      if (res) {
        console.log(res)
      this.evntDetail = res['detail'];
      this.imageFilesLocation = res.imageFilesLocation;
      this.image_url = res['detail'].image_url;
       } else {
      }
    }, error => {
    })
  }

  sendVideoWish(){

  }
  joinChat(){

  }
  // function to add events to google calender start
authenticate() {
  return gapi.auth2.getAuthInstance()
  .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"}).then((res)=> {
    this.loadClient();
    setTimeout(() => {
      this.execute();
    }, 2000);


    },
   function(err) {
          });
}
execute() {
  return gapi.client.calendar.events.insert({
    "calendarId": "primary",
    "conferenceDataVersion": 1,
    "maxAttendees": 3,
    "sendNotifications": true,
    "sendUpdates": "all",
    "supportsAttachments": false,
    "resource": {
      "end": {
        "date": this.evntDetail.date
      },
      "start": {
        "date": this.evntDetail.date
      },
      "description": "test",
      "summary": this.evntDetail.title
    }
  })
  .then(function(response) {
   // Handle the results here (response.result has the parsed body).
  },
  function(err) {
     });
}

 loadClient() {
  gapi.client.setApiKey("AIzaSyARK4GRhFCrbhyIXKAJrL2Vkkepz_1eVss");
  return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(function() {
      },
  function(err) {
     });
}
saveToCalender(){
this.authenticate();
}

// function to add events to google calender end
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  ngOnInit() {
    var OneSignal = window['OneSignal'] || [];
    console.log("Init OneSignal");
    OneSignal.push(["init", {
      appId: "e2849475-f8f6-4f05-988d-c42184dd5293",
            autoRegister: false,

    }]);
    console.log('OneSignal Initialized');
    // OneSignal.push(function () {
    //   console.log('Register For Push');
    //   OneSignal.push(["registerForPushNotifications"])
    // });
    // OneSignal.push(function () {
    //   OneSignal.on('subscriptionChange', function (isSubscribed) {
    //     console.log("The user's subscription state is now:", isSubscribed);
    //     OneSignal.getUserId().then(function (userId) {
    //       console.log("User ID is", userId);
    //     });
    //   });
    // });
    }
}

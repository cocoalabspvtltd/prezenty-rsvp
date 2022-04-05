import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';
import * as moment from 'moment';
import {Md5} from 'ts-md5/dist/md5';
declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard',     title: 'Preview',         icon:'nc-bank',       class: '' },
    // { path: '/list-gift-vouchers',         title: 'Send gift or Vouchers',             icon:'nc-diamond',    class: '' },
    // { path: '/sent-video',          title: 'Send Video Wish',              icon:'nc-pin-3',      class: '' },
    // { path: '/users',          title: 'Join Chat',              icon:'nc-bell-55',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
  pid: string;
  participant_email: any;
  timestmp: number;
  liveLink: string;
  minutes: any;
  currentTime: any;
  join: boolean;
  sharelive: boolean;
  eventId: string;
  eventDetails: any;
  date: Date;
  time: any;
  eventDay: string;
    constructor(private apiService:ApiService,private router:Router) {
      this.pid = localStorage.getItem('pid');
      this.eventDetailsList();

    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
this.handleEventDetail();

    }

    handleEventDetail(){
      this.eventId = localStorage.getItem('eventId');
      this.apiService.getEventDetail(this.eventId).subscribe((res:any)=>{
        if (res) {
          this.eventDetails = res.detail;

          this.date = new Date(this.eventDetails.date);
          let longMonth = this.date.toLocaleString('en-us', { month: 'short' }); /* June */
         let year = this.eventDetails.date.slice(0,4);
         let day = this.eventDetails.date.slice(8,10);
          this.time = this.eventDetails.time;
          this.eventDay = day + '-' + longMonth + '-' + year;
          const eventday = new Date(this.eventDay).toLocaleString('en-us', {weekday:'long'})
         var currenDay = new Date().toLocaleString('en-us', {  weekday: 'long' })
         var today = new Date();
         let hours = new Date(today).getHours();
          this.minutes = new Date(today).getMinutes();
         var ampm = hours >= 12 ? 'PM' : 'AM';
         hours = hours % 12;
         hours = hours ? hours : 12; // the hour '0' should be '12'
         this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
         var strTime = hours + ':' + this.minutes + ' ' + ampm;
         var format = 'hh:mm:ss';
         this.currentTime =  moment(strTime, 'hh:mm A').format('HH:mm');

         var specific_date = new Date(this.eventDay);
         var current_date = new Date();
         if(current_date.getDate() == specific_date.getDate())
         {
             if(eventday ===  currenDay){
               this.sharelive = true;
             }
             else{
               this.sharelive = false;

              }
         }
         else
         {
         }
         }

      }
      )
    }
    eventDetailsList(){
      this.apiService.getEventdetailsList(this.pid).subscribe((res:any)=>{
        if (res) {
        this.participant_email = res['detail'].email;
        if(this.participant_email){
          this.router.navigateByUrl('/dashboard')
        }
        // else{
        //   console.log(this.participant_email)
        //  this.router.navigateByUrl('/register')

        // }
         } else {
        }
      }, error => {
      })
    }
    gotochat(){
      this.eventDetailsList();
    }

    joinlivestream(){


      const md5 = new Md5();
      // const link =  window.open('https://meet.jit.si/' +  md5.appendStr('event:'+this.eventId).end(), '_blank').focus();
      if(this.sharelive === true){
        window.open('https://meet.jit.si/' +  md5.appendStr('event:'+this.eventId).end(), '_blank').focus();
        // this.liveLink = 'https://meet.jit.si/Prezenty/' +  md5.appendStr(this.event_id).end() ;
        // $('#sharelinkLiveLink').modal('show');
      }
      else{
        $('#live-warning-modal').modal('show');
        $('body').css('padding-right','0');

        setTimeout(() => {
          $('#live-warning-modal').modal('hide');

        }, 2000);
      }
    }

}

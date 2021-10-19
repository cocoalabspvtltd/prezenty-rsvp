import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/api.service';


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
    constructor(private apiService:ApiService,private router:Router) {
      this.pid = localStorage.getItem('pid');

    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);


    }
    eventDetailsList(){
      this.apiService.getEventdetailsList(this.pid).subscribe((res:any)=>{
        console.log(res)
        if (res) {
        this.participant_email = res['detail'].email;
        console.log(this.participant_email)
        if(this.participant_email){
          console.log(this.participant_email)
          this.router.navigateByUrl('/users')
        }
        else{
          console.log(this.participant_email)
         this.router.navigateByUrl('/register')

        }
         } else {
        }
      }, error => {
      })
    }
    gotochat(){
      this.eventDetailsList();
    }



}

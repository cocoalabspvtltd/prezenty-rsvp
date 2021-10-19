import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
var loginToken = localStorage.getItem("LoginToken")
var httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer "  + loginToken,
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

   public  BASE_URL= 'https://www.cocoalabs.in/event/api/web/v1'

  constructor(private http: HttpClient) { }

  getEventDetail(evntid){
    return this.http.get(this.BASE_URL + `/event/event-detail?event_id=` +evntid)
  }
  getEventdetailsList(evntid){
    return this.http.get(this.BASE_URL + `/event-participant/detail?id=` +evntid)
  }
  submitRSVPForm(data){

    return this.http.post(this.BASE_URL + `/event-participant/create`,data)

  }
  getvouchers(id){
    return this.http.get(this.BASE_URL + `/event-participant/gift-list?id=`+id)

    // return this.http.get(this.BASE_URL + `/event-participant/gift-list?id=4`)
  }
  getvoucherdetail(){
    return this.http.get(this.BASE_URL + `/fundraiser-scheme/list`)
  }
  getPaymentkey( ){
    return this.http.get(this.BASE_URL + `/razorpay/get-api-key`)
  }
  getOrderId(participant_email,amount,gift_id,event_id){
    let params = new HttpParams();
    params = params.append('participant_email', participant_email);
    params = params.append('amount', amount);
    params = params.append('gift_id', gift_id);
    params = params.append('event_id', event_id);
    let headers = new HttpHeaders();
    const options = { params:params}
  return this.http.get(this.BASE_URL + `/razorpay/get-order-id`,options )
  }
  getvoucherDetail(id){
    console.log(id)
    return this.http.get(this.BASE_URL + `/event-participant/gift-detail?id=`+id)
  }
  sendVideo(data){
    console.log(data)
      for(let val of data){
    console.log(val)
  }
    return this.http.post(this.BASE_URL + `/event-participant/send-video-wishes`,data)
  }
  getUsers(){
    var id = localStorage.getItem('eventId')
    return this.http.get(this.BASE_URL + `/event-participant/participants?id=` +id)
  }
  getParticipantDetail(id){
      return this.http.get(this.BASE_URL + `/event-participant/detail?id=` +id)
  }
  getPrivateChatMessages(receiver_email,sender_email,event_id){
    let params = new HttpParams();
    params = params.append('receiver_email', receiver_email);
    params = params.append('sender_email', sender_email);
    params = params.append('event_id', event_id);
    const options = { params:params}
  return this.http.get(this.BASE_URL + `/chat/message`,options )
  }
  sendMessages(data){
    console.log(data)
      for(let val of data){
    console.log(val)
  }
    return this.http.post(this.BASE_URL + `/chat/send-message`,data)

  }
  updateParticipantEmail(data){
    console.log(data)
    for(let val of data){
  console.log(val)
}
    return this.http.post(this.BASE_URL + `/event-participant/update-participant`,data)
  }
  getGroupMessages(event_id){
    return this.http.get(this.BASE_URL + `/chat/group-message?event_id=` +event_id)

  }
}

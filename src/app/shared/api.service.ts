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

  // public BASE_URL = " http://prezenty.in/prezenty-staging/api/web/v1";
  public BASE_URL = " http://prezenty.in/prezenty/api/web/v1";


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
  getBlockedUsers(id){
    var loginToken = localStorage.getItem("loginToken");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + loginToken);
    let params = new HttpParams();
    params = params.append("event_id", id);
    params = params.append("page", "1");
    params = params.append("per_page", "20");
    const options = { params: params,headers:headers };
    return this.http.get(
      this.BASE_URL + `/blocked-users`,
      options
    );
  }

  blockUserMessage(data){
    console.log(data)
    for (let val of data) {
      console.log(val);
    }
    var loginToken = localStorage.getItem("loginToken");
    console.log(loginToken);
    var httpOptions1 = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + loginToken,
      }),
    };
      return this.http.post(this.BASE_URL + `/chat/block-user`, data,httpOptions1);
    }

    unblockUserMessage(data){
      var loginToken = localStorage.getItem("loginToken");
      console.log(loginToken);
      var httpOptions1 = {
        headers: new HttpHeaders({
          Authorization: "Bearer " + loginToken,
        }),
      };
        return this.http.post(this.BASE_URL + `/chat/un-block-user`, data,httpOptions1);
    }

}

import { Injectable } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// var SockJS = require('sockjs-client');
// var Stomp = require('stompjs');

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  webSocketEndPoint: string = 'http://localhost:8093/websocket';
  topic: string = 'user_topic';
  stompClient: any;
  serviceMessage = [];
  loginUser: any;
  activeUsers: any;
  botMessage = {
    fromUserId: '',
    empName: '',
    designation: '',
    topic: '',
    toUserId: '',
    subject: '',
    message: '',
    date: Date
  }
  // adminServiceMessages = [];
  // empData: any;
  chatbot_live = "//localhost:8093/";

  constructor(private http: HttpClient) {
    // this._connect();
  }

  _connect() {
    // this.empData = JSON.parse(sessionStorage.getItem('emp'));
    // this.topic = this.empData.emp_id;
    this.topic = 'user_topic';
    let ws = new SockJS(this.webSocketEndPoint);

    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, function (frame) {
      this.stompClient.subscribe(this.topic, function (message) {

        this.onMessageReceivedSendUser(message);
      });

    }, this.errorCallBack);
  }

  addUser() {
    this.botMessage.empName = 'harish';
    this.stompClient.send("/app/chat-add-user", {}, JSON.stringify(this.botMessage));
  }

  getConnections(): Observable<any> {
    return this.http.get('//localhost:8093/connections');
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  _send(botMessage: any) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/user", {}, JSON.stringify(botMessage));
  }

  onMessageReceivedSendUser(message) {
    console.log("Message Recieved from Server :: " + message);
    this.serviceMessage = JSON.parse(message.body);
  }
}

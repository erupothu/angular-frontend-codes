import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ViewsService } from '../views.service';

@Component({
  selector: 'app-chating',
  templateUrl: './chating.component.html',
  styleUrls: ['./chating.component.css']
})
export class ChatingComponent implements OnInit, AfterContentChecked {

  messages: any;
  value: any;
  loginUser: any;
  constructor(private viewService: ViewsService) { }

  ngOnInit(): void {
    this.messages = [
      {
        author: 'user',
        content: `<img src="../../../assets/person.png" height="50px" width="50px">  Hi Vinny`
      },
      {
        author: 'bot',
        content: 'Hi Harish'
      }, {
        author: 'user',
        content: `<img src="../../../assets/person.png" height="50px" width="50px">  How are you`
      },
      {
        author: 'bot',
        content: `I'm Fine Harish`
      }
    ];
    
    // this.viewService._connect();
    // this.viewService.getConnections().subscribe(data => {
    //   const response = data;
    // })
  }

   ngAfterContentChecked() {
    // ...
    this.viewService.addUser();
  }

  firstImageChat() {

  }
  sendMessage() {
    this.viewService._send(this.messages);
  }

}

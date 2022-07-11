import { Component, OnInit } from '@angular/core';
import { ViewsService } from './views.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  constructor(public viewService: ViewsService) { }

  ngOnInit(): void {
    this.viewService._connect();
  }

  submit() {
    this.viewService._send(this.viewService.botMessage);
  }

}

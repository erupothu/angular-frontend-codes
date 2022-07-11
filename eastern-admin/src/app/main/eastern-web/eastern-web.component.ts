import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eastern-web',
  templateUrl: './eastern-web.component.html',
  styleUrls: ['./eastern-web.component.css']
})
export class EasternWebComponent implements OnInit {

  flipDev: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  rotate() {
    this.flipDev = !this.flipDev;
  }

}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlipComponent } from 'ngx-flip';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(FlipComponent, { static: false }) flipComp: FlipComponent;
  //  @ViewChild(FlipComponent, { static: false }) flipComp: FlipComponent;
  // flip: boolean = false;
  feeds: Array<string> = [];
  newUsers: Array<string> = [];
  note: Array<string> = [];
  recentEntries: Array<string> = [];
  feed: FormGroup;
  newUserGroup: FormGroup;
  newNote: FormGroup;
   imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH";
  img2 = "https://i.imgur.com/hADsCdm.png"
  flip: boolean;

  constructor(private fb: FormBuilder) {
    this.feed = this.fb.group({
      feedUrl: ['', Validators.required],
      feedTitle: ['', Validators.required],
      feedLimit: ['', Validators.required]
    });
    this.newUserGroup = this.fb.group({
      userNmae: ['', Validators.required],
      userTitle: ['', Validators.required],
      userDetails: ['', Validators.required]
    });
    this.newNote = this.fb.group({
      noteTitle: ['', Validators.required],
      noteDescription: ['', Validators.required],
      note: ['', Validators.required]
    });
   }
  

  ngOnInit(): void {
  }

   ngAfterViewInit() {
   }

  addNewFeeds() {
    
  }

  addNewUser() {

  }

  addNewNote() {

  }
  rotate() {
    this.flip = !this.flip;
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewblogService } from './viewblog.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewblogComponent implements OnInit {

  user: any;
  values = '';
  textCounter = 0;
  text = ['This is for testing',
    'Nowadays we spent more and more time using devices other than a laptop or desktop. Last week, this site had more visitors' +
    'using mobile devices than PCs, so mobile friendly sites are becoming more and more important.One important aspect of mobile sites is' +
    'how the user interacts with the content.Instead of clicking or using a keyboard to navigate, they instead use touches and gestures.',
  'Angular comes pre-built with all the browser event listeners, which largely are aimed around PC users and traditional mouse and ' +
  'keyboard events, along with some basic touch recognition events. There are however many touch gestures that could be utilized for ' +
  'better user experiences such as panning, zooming, swiping and rotating to name a few. Angular doesn’t come with these event ' +
  'listeners as standard, however it comes with great support for HammerJS, a library designed for handling such events.'];

  innerHtmlText: any;
  now: Date = new Date();
  seconds = 0;
  interval: any;
  score: any;
  secondsChange: any;

  constructor(
    private viewBlogService: ViewblogService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.innerHtmlText = this.text[this.textCounter];
    // this.user = JSON.parse(sessionStorage.getItem('userModel'));
    // this.viewBlogService.getBlogPagesByUserId(this.user.userId).subscribe( data => {
    //   this.user = data;
    // });
  }

  startTypingTest() {
    document.body.addEventListener('keypress', (event) => {
      if (this.text[this.textCounter].length === this.values.length) {
        this.innerHtmlText = this.text[++this.textCounter];
        this.values = '';
      }
      if (event.key !== 'Enter') {
        this.values += event.key;
        if (!this.text[this.textCounter].startsWith(this.values)) {
          this.values = this.values.substr(0, this.values.length - 1);
        }
        this.innerHtmlText = this.text[this.textCounter].replace(this.values, '<span class="highlightText">' + this.values + ' </span>');
      }

    });
    // this.startImeInterval();
  }

  startImeInterval() {
    this.interval = setInterval(() => {
      this.now = new Date();
      if ((this.secondsChange < this.now.getSeconds()) || (this.secondsChange === undefined)) {
        this.secondsChange = this.now.getSeconds();
        this.seconds++;
        this.score = ((this.values.length * 60) / this.seconds);
      }
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.interval);
  }



}

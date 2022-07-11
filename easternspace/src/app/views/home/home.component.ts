import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown } from 'ng-animate';
import { interval } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('teximate') teximate: ElementRef;

  // img_list = [
  //   { name: 'https://picsum.photos/800/500/?image=0', title: 'good day' },
  //   { name: 'https://picsum.photos/800/500/?image=1', title: 'image 2' },
  //   { name: 'https://picsum.photos/800/500/?image=2', title: 'image 3' },
  //   {name: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg', title: 'I am looking great.'}
  // ];
  bussiness_images = [
    { name: '../../../assets/images/bussines_contacts.png', title: 'One Place where your Bussiness Start' },
    { name: '../../../assets/images/bloging2.jpg', title: 'One Place where you Learn and Teach' },
    { name: '../../../assets/images/harish_profile.png', title: 'Your Dream profile, Im feeling great' },
    {name: '../../../assets/images/harish-engagement.jpg', title: 'One Pace we get togather'}
  ];
  current = 0;

  constructor() {

  }

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    setInterval(() => {
      this.current = ++this.current % this.bussiness_images.length;
    }, 5000);

    const source = interval(5000);
    const subscribe = source.subscribe(val => {
      // this.teximate.enterPlayer.play();
      this.teximate.nativeElement.enterPlayer.play();
    });

    const textWrapper = document.querySelector('.an-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.an-1 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      }).add({
        targets: '.an-1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }

  text = 'Lorem ipsum dolor sit amet.';

  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter'
  };


}

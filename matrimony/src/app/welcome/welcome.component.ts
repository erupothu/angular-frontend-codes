import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // https://www.npmjs.com/package/ng-image-slider
  married_couples: Array<object> = [
    { image: '../../assets/images/harish-mrg.jpg', thumbImage: '../../assets/images/harish-mrg.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish-thali.jpg', thumbImage: '../../assets/images/harish-thali.jpg', alt: 'alt of image', title: 'title of image' },
    // {video: 'https://youtu.be/6pxRHBw-k8M', alt: 'alt of image', title: 'title of image'}, 
    { video: '../../assets/gif/harish.gif', posterImage: '../../assets/images/harish-engagement.jpg', title: 'title of image' },
    { image: '../../assets/images/harish1.jpg', thumbImage: '../../assets/images/harish1.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish1.jpg', thumbImage: '../../assets/images/harish1.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish2.jpg', thumbImage: '../../assets/images/harish2.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish3.jpg', thumbImage: '../../assets/images/harish3.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish4.jpg', thumbImage: '../../assets/images/harish4.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish5.jpg', thumbImage: '../../assets/images/harish5.jpg', alt: 'alt of image', title: 'title of image' }
  ]

  bride_single: Array<object> = [
    { image: '../../assets/images/nani.jpg', thumbImage: '../../assets/images/nani.jpg', alt: 'alt of image', title: 'nani' },
    { image: '../../assets/images/chinna-single.jpg', thumbImage: '../../assets/images/chinna-single.jpg', alt: 'alt of image', title: 'chinna' },
    { image: '../../assets/images/ponduraj-mam-single.jpg', thumbImage: '../../assets/images/ponduraj-mam-single.jpg', alt: 'alt of image', title: 'ponduraju' },
    { image: '../../assets/images/harish.jpg', thumbImage: '../../assets/images/harish.jpg', alt: 'alt of image', title: 'harish' },
    { image: '../../assets/images/harish-single.jpg', thumbImage: '../../assets/images/harish-single.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish3.jpg', thumbImage: '../../assets/images/harish3.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish4.jpg', thumbImage: '../../assets/images/harish4.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish5.jpg', thumbImage: '../../assets/images/harish5.jpg', alt: 'alt of image', title: 'title of image' }
  ]

  groom_single: Array<object> = [
    { image: '../../assets/images/vinny-single.jpg', thumbImage: '../../assets/images/vinny-single.jpg', alt: 'alt of image', title: 'vinny' },
    { image: '../../assets/images/harish-thali.jpg', thumbImage: '../../assets/images/harish-thali.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish1.jpg', thumbImage: '../../assets/images/harish1.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish1.jpg', thumbImage: '../../assets/images/harish1.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish2.jpg', thumbImage: '../../assets/images/harish2.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish3.jpg', thumbImage: '../../assets/images/harish3.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish4.jpg', thumbImage: '../../assets/images/harish4.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish5.jpg', thumbImage: '../../assets/images/harish5.jpg', alt: 'alt of image', title: 'title of image' }
  ]
  age: any;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    // https://icons8.com/icon/set/social-media/m_rounded#
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/icons8-facebook-240.svg'));
    this.matIconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/icons8-twitter.svg'));
    this.matIconRegistry.addSvgIcon('youtube', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/icons8-play-button.svg'));
    this.matIconRegistry.addSvgIcon('whatsapp', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/icons8-whatsapp.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/icons8-linkedin.svg'));

    
  }

  ngOnInit() {
    this.age =Array.from({length: 100}, (v, k) => k+1);
    
  }

}

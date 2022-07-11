import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from 'materialize-css';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  options = { fullWidth: false};
  // options = { fullWidth: false, noWrap: true, indicators: false , numVisible: 5, shift: 0, dist: 50};
  married_couples: Array<object> = [
    { image: '../../assets/images/harish-mrg.jpg', thumbImage: '../../assets/images/harish-mrg.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish-thali.jpg', thumbImage: '../../assets/images/harish-thali.jpg', alt: 'alt of image', title: 'title of image' },
    { video: '../../assets/gif/harish.gif', posterImage: '../../assets/images/harish-engagement.jpg', title: 'title of image' },
    { image: '../../assets/images/harish1.jpg', thumbImage: '../../assets/images/harish1.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish1.jpg', thumbImage: '../../assets/images/harish1.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish2.jpg', thumbImage: '../../assets/images/harish2.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish3.jpg', thumbImage: '../../assets/images/harish3.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish4.jpg', thumbImage: '../../assets/images/harish4.jpg', alt: 'alt of image', title: 'title of image' },
    { image: '../../assets/images/harish5.jpg', thumbImage: '../../assets/images/harish5.jpg', alt: 'alt of image', title: 'title of image' }
  ]
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // https://www.npmjs.com/package/materialize-css
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
  }

}

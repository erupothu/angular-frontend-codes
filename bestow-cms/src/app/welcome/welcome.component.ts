import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register/register.service';
import { RxFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { WelcomeService } from './welcome.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  images = [
    'https://picsum.photos/id/10/500/500',
    'https://picsum.photos/id/1000/500/500',
    'https://picsum.photos/id/1003/500/500',
    'https://picsum.photos/id/1002/500/500',
    'https://picsum.photos/id/1016/500/500',
    'https://picsum.photos/id/1018/500/500',
    'https://picsum.photos/id/1028/500/500',
    'https://picsum.photos/id/1032/500/500'
  ];
  current = 1;

  articles: any = [
    {title: 'first Article', author: 'Harish', publishedDate: '10-10-2020', description: 'Big mistake on my part. I redo all the ' +
    'tests and the corrections by 1 to 2 hours. as it is night : not of rainfall. The corrections are made all my excuses Wolni' +
    'Friday 18 - 10', image: 'https://picsum.photos/id/10/500/500'},
    {title: 'second Article', author: 'Vishnu', publishedDate: '10-10-2020', description: 'Big mistake on my part. I redo all the ' +
    'tests and the corrections by 1 to 2 hours. as it is night : not of rainfall. The corrections are made all my excuses Wolni' +
    'Friday 18 - 10', image: 'https://picsum.photos/id/1000/500/500'},
    {title: 'third Article', author: 'Naveen', publishedDate: '10-10-2020', description: 'Big mistake on my part. I redo all the ' +
    'tests and the corrections by 1 to 2 hours. as it is night : not of rainfall. The corrections are made all my excuses Wolni' +
    'Friday 18 - 10', image: 'https://picsum.photos/id/1003/500/500'}
  ];

  constructor(
    private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.images.length;
    }, 2000);
  }



  // readFileFromAssets() {
  //   this.http.get('assets/jsonfiles/sample.json').subscribe(data => {
  //     this.jsonData = JSON.stringify(data);
  //   });
  // }

  // saveFiletoAssets() {
  //   this.http.post('assets/jsonfiles/samplefile2.json', this.jsonData);
  // }

}

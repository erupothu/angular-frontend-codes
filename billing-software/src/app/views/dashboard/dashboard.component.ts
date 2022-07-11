import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fillerNav = [
    {name: 'New Item', icon: 'add'},
    {name: 'Manage Bill', icon: 'edit'},
    {name: 'View Sales', icon: 'note'},
    {name: 'View Saved Files', icon: 'files'}
  ]

  // fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

   constructor() {
    // translateService.addLangs(['en', 'de', 'te']);
    // translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  // switchLanguage(language: string) {
  //   this.translateService.use(language);
  // }

}

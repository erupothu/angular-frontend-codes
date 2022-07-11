import { Component, OnInit } from '@angular/core';
import { ViewsService } from '../views/views.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  constructor(public viewService: ViewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.viewService._connect();
  }

  submit() {
    sessionStorage.setItem('name', this.username);
    this.viewService.loginUser = this.username;
    this.router.navigate(['/dashboard']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData: any;

  constructor(private fb: FormBuilder, private loginService: LoginService, private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
   }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe( data => {
      if (data.message === 'username and password are invalid') {
        this.snackBar.open('username and password are invalid');
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('userId', data.userId);
      } else {
        this.loginData = data;
        sessionStorage.setItem('userModel', JSON.stringify(this.loginData.response));
        this.router.navigate(['/admin-dashboard']);
      }
    }, error => {
      this.snackBar.open(error.userName);
    });
  }

}

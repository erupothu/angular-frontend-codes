import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerResponse: any;
  submitted = false;
  name: any;
  password: any;
  validUser: boolean;
  validPassword: boolean;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private snackBar: MatSnackBar, private router: Router) {

    this.registerForm = fb.group({
      name: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      confirmPassword: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      email: ['', Validators.email ]
    });
    this.name = this.registerForm.controls.name;
    this.password = this.registerForm.controls.password;
   }

  ngOnInit() {
  }

  f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;
    this.registerService.register(this.registerForm.value).subscribe(data => {
      this.registerResponse = data;
      this.snackBar.open('successfully added to blog team');
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }, error => {
      this.snackBar.open(error.name, 'server down', {duration: 2000});
    }
    );
  }

  vallidateName() {
    this.registerService.validateName(this.registerForm.controls.name.value).subscribe( data => {
      if (data.message === 'user name is valid') {
        this.validUser = true;
      } else {
        this.validUser = false;
      }
    });
  }

  matchPassword() {
    if (this.registerForm.controls.password.value === this.registerForm.controls.confirmPassword.value) {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
  }

}

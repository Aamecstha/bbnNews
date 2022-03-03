import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authResponseData, authService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error = null;

  constructor(private auth: authService,private router:Router) {}

  ngOnInit(): void {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let email = form.value.email;
    let password = form.value.password;

    this.isLoading = true;
    let authObs: Observable<authResponseData>;

    if (this.isLoginMode) {
      authObs = this.auth.login(email, password);
    } else {
      authObs = this.auth.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.error = null;
        this.router.navigate(['/'])
      },
      (errorMsg) => {
        console.log(errorMsg);
        this.isLoading = false;
        this.error = errorMsg;
        this.router.navigate(['/'])
      }
    );

    form.reset();
  }
}

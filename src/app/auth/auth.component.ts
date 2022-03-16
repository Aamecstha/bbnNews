import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { authResponseData, authService, UserData } from './auth.service';
import { OwnAuthService } from './own-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error = null;

  constructor(private auth: authService,private router:Router,private ownAuth:OwnAuthService,private toastr:ToastrService) {}

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
    let authObs: Observable<UserData>;

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
        console.log("Error Masaaz:",errorMsg);
        this.isLoading = false;
        this.error = errorMsg;
        this.toastr.error(errorMsg.error.message,"Failed",{timeOut:3000})
      }
    );

    form.reset();
  }
}

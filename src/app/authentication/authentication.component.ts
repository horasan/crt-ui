import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthenticationUI } from './authentication-ui.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private authenticationUI: AuthenticationUI;
  
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(ngForm: NgForm) {
    //alert("onLogin() clicked!");
    //console.log(ngForm.value)
    //this.authService.login
    this.authenticationUI = ngForm.value;
    this.authService.login(
      this.authenticationUI.email,
      this.authenticationUI.password)
      .subscribe(
        resData => {
            console.log(resData);
        },
        errorData => {
          console.log(errorData);
        }
        );

    ngForm.reset();
  }

  onSignUp(ngForm: NgForm) {
    //alert("onSignUp() clicked!");
    console.log(ngForm)
    ngForm.reset();
  }


}

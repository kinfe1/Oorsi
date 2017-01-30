import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
import { NgForm } from '@angular/forms/src/directives';

declare const FB: any;

@Component({
    selector: 'oorsi-web-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error: string;
    loading: boolean;


    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit() { }

    onLogin(ngForm: NgForm) {

        this.authService.login(ngForm.value.email, ngForm.value.password).subscribe(result => {
            if (result === true) {
                // login successful
                this.router.navigate(['/']);
            } else {
                // login failed
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
    }

    onFacebookLoginClick() {
        if (FB) {
            FB.login(response => {
                console.log(response);
                if (response.status === 'connected') {
                    this.authService.facebookLogin(response.authResponse.accessToken).subscribe(
                        data => {
                            if (data === true) {
                                // login successful
                                this.router.navigate(['/']);
                            } else {
                                this.router.navigate(['/register'], { skipLocationChange: true, queryParams: { fbat: response.authResponse.accessToken } });
                            }
                        }, err => location.reload);
                }
            }, { scope: 'email,user_friends' });
        }
    }





}

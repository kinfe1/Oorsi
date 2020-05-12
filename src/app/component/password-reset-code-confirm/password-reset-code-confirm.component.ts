import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Error } from 'src/app/model/error';

@Component({
  selector: 'app-password-reset-code-confirm',
  templateUrl: './password-reset-code-confirm.component.html',
  styleUrls: ['./password-reset-code-confirm.component.css']
})
export class PasswordResetCodeConfirmComponent implements OnInit {


  myForm: FormGroup;
  submitAttempt: boolean = false;
  loading: boolean = false;

  popTo: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.myForm = this.formBuilder.group({
      token: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

    // this.authService.authenticationChanged.subscribe(data => {
    //   if (data == true) {
    //     this.closePage();
    //   }
    // });
  }

  ngOnInit() {
    // console.log('ionViewDidLoad PasswordResetPage');
    // this.popTo = this.navParams.get("popTo");

  }

  resetPassword() {

    this.submitAttempt = true;
    this.loading = true;
    if (this.myForm.valid) {
      this.authService.resetPassword(this.myForm.value).then(
        result => {
          this.loading = false;
          // this.closePage();
          this.router.navigate(["/news"]);
        }
      ).catch(err => {
        this.loading = false;
        let errors: Error[] = err.error;
        for (let error of errors) {
          if (this.myForm.controls[error.fieldName]) {
            this.myForm.controls[error.fieldName].setErrors({ remote: error.message });
          }
        }
      });
    } else {
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Error } from 'src/app/model/error';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  myForm: FormGroup;
  submitAttempt: boolean = false;
  loading: boolean = false;

  popTo: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    this.submitAttempt = true;
    if (this.myForm.valid) {
      this.loading = true;
      this.authService.requestCode(this.myForm.value).subscribe(
        result => {
          console.log("resetPassword success" + result);
          this.loading = false;
          // this.navCtrl.push(PasswordResetPage, { popTo: this.popTo });
          this.router.navigate(["/confirmPasswordResetCode"])
        },
        err => {
          console.log("resetPassword failure" + err);
          this.loading = false
          let errors: Error[] = err.error;
          for (let error of errors) {
            if (this.myForm.controls[error.fieldName]) {
              this.myForm.controls[error.fieldName].setErrors({ remote: error.message });
            }
          }
        });
    }

  }

}

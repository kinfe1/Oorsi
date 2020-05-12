import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';
import { Error } from 'src/app/model/error';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  /**
   *
   */
  private signupFormGroup: FormGroup;

  submitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupFormGroup = fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void { }

  register() {

    this.submitAttempt = true;
    if (this.signupFormGroup.valid) {
      this.authService.register(this.signupFormGroup.value).then(
        result => {
          debugger;
          this.router.navigate(['/welcome/addBirthday'])
        },
        err => {
          let errors: Error[] = err;
          for (let error of errors) {
            if (this.signupFormGroup.controls[error.fieldName]) {
              this.signupFormGroup.controls[error.fieldName].setErrors({ remote: error.message });
            }
          }
        });
    } else {
    }
  }
}

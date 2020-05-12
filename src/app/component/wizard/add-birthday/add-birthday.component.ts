import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BirthdayService } from 'src/app/service/birthday.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.css']
})
export class AddBirthdayComponent implements OnInit {

  /**
  *
  */
  private form: FormGroup;

  months: { value: number, label: string }[] = [{ value: 0, label: 'Jan' }, { value: 1, label: 'Feb' }, { value: 2, label: 'Mar' }, { value: 3, label: 'Apr' }, { value: 4, label: 'May' },
  { value: 5, label: 'Jun' }, { value: 6, label: 'Jul' }, { value: 7, label: 'Aug' }, { value: 8, label: 'Sep' }, { value: 9, label: 'Oct' }, { value: 10, label: 'Nov' },
  { value: 11, label: 'Dec' },];

  submitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private birthdayService: BirthdayService, private router: Router) {
    this.form = fb.group({
      month: ['', [Validators.required]], day: ['', [Validators.required]], year: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    // this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('form valid and subscribing.')
      this.birthdayService.addBirthday(this.form.value).subscribe(data => {
        this.router.navigate(['/welcome/productSearchType']);
      });
    }

  }
}

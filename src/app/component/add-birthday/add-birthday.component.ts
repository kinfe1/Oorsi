import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PhoneNumberService } from 'src/app/service/phone-number.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { BirthdayService } from 'src/app/service/birthday.service';

@Component({
  selector: 'oorsi-web-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.css']
})
export class AddBirthdayComponent implements OnInit {

  myForm: FormGroup;

  protected loading: boolean = false;

  @Output() public saveEmmiter: EventEmitter<void> = new EventEmitter();
  @Output() public skipEmmiter: EventEmitter<void> = new EventEmitter();

  constructor(private birthdayService: BirthdayService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      birthDate: []
    });

  }


  save() {
    this.loading = true;
    this.birthdayService.save(this.myForm.value).subscribe(data => {
      this.loading = false;
      this.saveEmmiter.emit();
    }, error => {
      this.loading = false;
      console.log(error);
    })
  }

  skip() {
    this.skipEmmiter.emit()
  }

}

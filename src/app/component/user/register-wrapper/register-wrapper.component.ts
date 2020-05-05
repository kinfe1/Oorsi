import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'oorsi-web-register-wrapper',
  templateUrl: './register-wrapper.component.html',
  styleUrls: ['./register-wrapper.component.css']
})
export class RegisterWrapperComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userRegistered(): void {
    this.router.navigate(['/news']);
  }

}

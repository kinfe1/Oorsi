import { Component, OnInit } from '@angular/core';
import { WishListProduct } from 'src/app/model/wishlistproduct';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/service/wishlist.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-add-amazon-product',
  templateUrl: './add-amazon-product.component.html',
  styleUrls: ['./add-amazon-product.component.css']
})
export class AddAmazonProductComponent implements OnInit {



  constructor(private router: Router, private wishlistService: WishlistService, private authService: AuthService, private fb: FormBuilder) {
    this.complexForm = fb.group({
      'url': ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSave(wishlistProduct: WishListProduct): void {
    if (this.router.isActive('/wishlist', true)) {
      this.wishlistService.wishlistAddedEvent.emit(wishlistProduct);
    } else {
      this.router.navigate(['/wishlist']);
    }
  }



  showCancelButton: boolean = false;

  complexForm: FormGroup;
  error: boolean;


  submitForm() {
    this.wishlistService.addAmazonUrlToWishlist(this.complexForm.value).subscribe(data => {
      this.onSave(data);
      this.complexForm.reset(this.complexForm.value);
    }, err => this.authService.checkError(err));
  }

  // onCancel() {
  //   this.cancel.emit();
  // }

}

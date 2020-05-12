import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IformsModule } from "src/app/l-components/forms/iforms.module";
import { LoggedInUserService } from 'src/app/service/logged-in-user.service';


import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AddAmazonProductToWishlistComponent } from './add-amazon-product-to-wishlist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IformsModule],
  declarations: [
    AddAmazonProductToWishlistComponent
  ],
  providers: [],
})
export class AddAmazonProductToWishlistModule { }

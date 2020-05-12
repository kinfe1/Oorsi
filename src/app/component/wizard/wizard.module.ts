import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WizardComponent } from "./wizard.component";
import { SignupComponent } from "./signup/signup.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AddBirthdayComponent } from "./add-birthday/add-birthday.component";
import { AddAmazonProductComponent } from "./add-amazon-product/add-amazon-product.component";
import { AddPhonenumberComponent } from "./add-phonenumber/add-phonenumber.component";
import { IformsModule } from "src/app/l-components/forms/iforms.module";
import { LoggedInUserService } from 'src/app/service/logged-in-user.service';
import { ProductSearchTypeComponent } from './product-search-type/product-search-type.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AddAmazonProductToWishlistModule } from '../add-amazon-product-to-wishlist/add-amazon-product-to-wishlist.module';

const wizardRoutes: Routes = [
  {
    path: "",
    component: WizardComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: WelcomeComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
      },
      {
        path: "addBirthday",
        component: AddBirthdayComponent,
        canActivate: [LoggedInUserService]
      },
      {
        path: "addPhone",
        component: AddPhonenumberComponent,
        canActivate: [LoggedInUserService]
      },
      {
        path: "productSearchType",
        component: ProductSearchTypeComponent,
        canActivate: [LoggedInUserService]
      },
      {
        path: "addAmazonProduct",
        component: AddAmazonProductComponent,
        canActivate: [LoggedInUserService]
      },
      {
        path: "searchProduct",
        component: ProductSearchComponent,
        canActivate: [LoggedInUserService]
      }

      // ,
      // {
      //   path: 'loader',
      //   component: LoaderDialogComponent,
      //   data: { title: 'Loader', breadcrumb: 'LOADER' },
      // }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(wizardRoutes),
    ReactiveFormsModule,
    IformsModule,
    CarouselModule.forRoot(),
    // AddAmazonProductToWishlistModule
  ],
  declarations: [
    WizardComponent,
    SignupComponent,
    AddPhonenumberComponent,
    WelcomeComponent,
    AddBirthdayComponent,
    AddAmazonProductComponent,
    ProductSearchTypeComponent,
    ProductSearchComponent],
  providers: [],
})
export class WizardModule { }

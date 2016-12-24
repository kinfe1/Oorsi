import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { AUTH_PROVIDERS, AuthConfigConsts, AuthHttp, IAuthConfig, provideAuth } from 'angular2-jwt';
import { WishlistService } from './service/wishlist/wishlist.service';
import { ProductService } from './service/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { ProductItemComponent } from './component/shop/product/product-item/product-item.component';
import { ProductListComponent } from './component/shop/product/product-list/product-list.component';
import { ProductComponent } from './component/shop/product/product.component';
import { NewsFeedComponent } from './component/news-feed/news-feed.component';
import { FriendshipComponent } from './component/friendship/friendship.component';
import { ProductDetailComponent } from './component/shop/product/product-detail/product-detail.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { AuthService } from './service/auth/auth.service';
import { LogoutComponent } from './component/user/login/logout.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { WishlistItemComponent } from './component/wishlist/wishlist-item.component';

const appRoutes: Routes = [
    { path: '', redirectTo: "/news", pathMatch: "full" },
    { path: 'shop', component: ProductComponent, children: [{ path: "search", component: ProductListComponent }, { path: "sku/:sku", component: ProductDetailComponent }] },
    { path: 'news', component: NewsFeedComponent, canActivate: [AuthService] },
    { path: 'friends', component: FriendshipComponent, canActivate: [AuthService] },
    { path: 'wishlist', component: WishlistComponent, canActivate: [AuthService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
];

// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//     return new AuthHttp(new AuthConfig({
//         tokenName: 'token',
//         tokenGetter: (() => sessionStorage.getItem('token')),
//         globalHeaders: [{ 'Content-Type': 'application/json' }],
//     }), http, options);
// }

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        ProductItemComponent,
        ProductListComponent,
        ProductComponent,
        NewsFeedComponent,
        FriendshipComponent,
        ProductDetailComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        WishlistComponent,
        WishlistItemComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ProductService, AuthService, WishlistService],
    bootstrap: [AppComponent]
})
export class AppModule { }

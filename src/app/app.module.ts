import { AnonymousService } from './service/anonymous.service';
import { OrderService } from './service/order.service';
import { PaymentService } from './service/payment.service';
import { AddressService } from './service/address/address.service';
import { FriendSearchComponent } from './component/friendship/friend-search/friend-search.component';
import { WishlistService } from './service/wishlist.service';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { AUTH_PROVIDERS, AuthConfigConsts, AuthHttp, IAuthConfig, provideAuth, AuthConfig } from 'angular2-jwt';
import { ProductService } from './service/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap/modal';



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
import { NewsFeedItemComponent } from './component/news-feed/news-feed-item/news-feed-item.component';
import { NewsFeedService } from './service/news-feed/news-feed.service';
import { CartService } from './service/cart/cart.service';
import { CartComponent } from './component/cart/cart.component';
import { FriendshipService } from './service/friendship/friendship.service';
import { FriendsItemComponent } from './component/friendship/friends-item/friends-item.component';
import { FriendListComponent } from './component/friendship/friend-list/friend-list.component';
import { FriendFbSearchComponent } from './component/friendship/friend-fb-search/friend-fb-search.component';
import { FacebookService } from './service/fb/facebook.service';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CheckoutService } from './service/checkout/checkout.service';
import { AddressComponent } from './component/address/address.component';
import { PaymentComponent } from './component/payment/payment.component';
import { OrderDetailComponent } from './component/order/order-detail/order-detail.component';
import { OrderComponent } from './component/order/order.component';
import { ImageURLPipe } from './pipe/image-url.pipe';
import { ProfileService } from './service/profile.service';
import { LoggedInUserService } from './service/logged-in-user.service';


const appRoutes: Routes = [
    { path: '', redirectTo: "/shop", pathMatch: "full" },
    { path: 'shop', component: ProductComponent, children: [{ path: "search", component: ProductListComponent }, { path: "r/:retailer/sku/:sku", component: ProductDetailComponent }, { path: "id/:id", component: ProductDetailComponent }] },
    { path: 'news', component: NewsFeedComponent, canActivate: [LoggedInUserService] },
    { path: 'friends', component: FriendshipComponent, canActivate: [LoggedInUserService], children: [{ path: "", component: FriendListComponent }, { path: "search", component: FriendSearchComponent }, { path: "fb", component: FriendFbSearchComponent }] },
    { path: 'wishlist', component: WishlistComponent, canActivate: [LoggedInUserService] },
    { path: 'login', component: LoginComponent, canActivate: [AnonymousService] },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AnonymousService] },
    { path: 'cart', component: CartComponent, canActivate: [LoggedInUserService] },
    { path: 'checkout/for/:id', component: CheckoutComponent, canActivate: [LoggedInUserService] },
    { path: 'orders', component: OrderComponent },
    { path: 'orders/id/:id', component: OrderDetailComponent },
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {

    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('currentUser')), noJwtError: false,
    }), http, options);
}


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
        WishlistItemComponent,
        NewsFeedItemComponent,
        CartComponent,
        FriendSearchComponent,
        FriendsItemComponent,
        FriendListComponent,
        FriendFbSearchComponent,
        CheckoutComponent,
        AddressComponent,
        PaymentComponent,
        OrderDetailComponent,
        OrderComponent,
        ImageURLPipe,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes), ModalModule.forRoot(), ReactiveFormsModule
    ],
    providers: [ProductService, AuthService, WishlistService, NewsFeedService, CartService, FriendshipService, FacebookService, CheckoutService, AddressService, PaymentService, OrderService, ProfileService, AnonymousService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }, LoggedInUserService],
    bootstrap: [AppComponent]
})
export class AppModule { }

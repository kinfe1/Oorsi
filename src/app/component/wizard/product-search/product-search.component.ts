import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products: Product[] = [{ "productId": null, "retailerId": 2, "sku": "B07G7TDPRL", "name": "Under Armour Men's Charged Assert 8 Running Shoe", "regularPrice": null, "salePrice": null, "image": "https://m.media-amazon.com/images/I/81SviM3LOJL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B01MTKZF4M", "name": "ASICS Men's Gel-Venture 6 Running Shoe", "regularPrice": 69.95, "salePrice": 69.95, "image": "https://m.media-amazon.com/images/I/61V8pmSdqTL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07HGD4R5N", "name": "New Balance Men's Fresh Foam Roav V1 Running Shoe", "regularPrice": 43.97, "salePrice": 43.97, "image": "https://m.media-amazon.com/images/I/61g3sdR4eDL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07HKLZZRV", "name": "Under Armour Men's Charged Commit 2.0 Cross Trainer", "regularPrice": 59.99, "salePrice": 59.99, "image": "https://m.media-amazon.com/images/I/71TuGlzCH2L._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07BL2XQNV", "name": "New Balance Men's 680 V6 Cushioning Running Shoe", "regularPrice": 59.96, "salePrice": 59.96, "image": "https://m.media-amazon.com/images/I/71z915DDAIL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B0714BHD6C", "name": "adidas Women's Cloudfoam Qt Racer Running Shoe", "regularPrice": 59.98, "salePrice": 59.98, "image": "https://m.media-amazon.com/images/I/51FXRJ4NB1L._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B072BVVBNG", "name": "adidas Women's Cloudfoam Pure Running Shoe", "regularPrice": 45.0, "salePrice": 45.0, "image": "https://m.media-amazon.com/images/I/61zLDSMp+5L._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B071LF7VL8", "name": "adidas Men's Lite Racer Adapt Running Shoe", "regularPrice": 48.74, "salePrice": 48.74, "image": "https://m.media-amazon.com/images/I/81WqANXnjaL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07K2LNYSL", "name": "Under Armour Men's Charged Impulse Running Shoe", "regularPrice": 52.5, "salePrice": 52.5, "image": "https://m.media-amazon.com/images/I/61JQ4VsWDNL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B01C3LK9KY", "name": "PUMA Men's Tazon 6 Fracture FM Cross-Trainer Shoe", "regularPrice": 39.99, "salePrice": 39.99, "image": "https://m.media-amazon.com/images/I/61vRcRCE8LL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07D9MGRH4", "name": "adidas  Women's Lite Racer w Running Shoe", "regularPrice": null, "salePrice": null, "image": "https://m.media-amazon.com/images/I/81Q9Oaf18lL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07BL2PZMX", "name": "New Balance Women's Arishi V2 Fresh Foam Running Shoe", "regularPrice": null, "salePrice": null, "image": "https://m.media-amazon.com/images/I/61M4FCzbsvL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07L7BN3FV", "name": "adidas  Men's CF Lite Racer Byd", "regularPrice": 63.0, "salePrice": 63.0, "image": "https://m.media-amazon.com/images/I/81YzhFF9siL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07S57HKJK", "name": "adidas Women's Cloudfoam Pure Running Shoe, Grey Mãtallique Blanc Craie Corail VIF", "regularPrice": 61.44, "salePrice": 61.44, "image": "https://m.media-amazon.com/images/I/81UBMVIHHXL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B00NUZD2PW", "name": "ASICS Men's GEL Venture 5 Running Shoe", "regularPrice": 69.95, "salePrice": 69.95, "image": "https://m.media-amazon.com/images/I/91A+mJMIqRL._AC_UY218_.jpg" }, { "productId": null, "retailerId": 2, "sku": "B07C6MXKYD", "name": "Brooks Mens Adrenaline GTS 19 Running Shoe", "regularPrice": 89.99, "salePrice": 89.99, "image": "https://m.media-amazon.com/images/I/71NyNAZLzJL._AC_UY218_.jpg" }];
  searchString: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    // this.products = undefined;
    // this.productService.search(this.searchString).subscribe(data => {
    //   /** pass recieved data to propery */
    //   this.products = data;
    // });

    // this.products = [
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07G7TDPRL",
    //     "name": "Under Armour Men's Charged Assert 8 Running Shoe",
    //     "regularPrice": null,
    //     "salePrice": null,
    //     "image": "https://m.media-amazon.com/images/I/81SviM3LOJL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B01MTKZF4M",
    //     "name": "ASICS Men's Gel-Venture 6 Running Shoe",
    //     "regularPrice": 69.95,
    //     "salePrice": 69.95,
    //     "image": "https://m.media-amazon.com/images/I/61V8pmSdqTL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07HGD4R5N",
    //     "name": "New Balance Men's Fresh Foam Roav V1 Running Shoe",
    //     "regularPrice": 43.97,
    //     "salePrice": 43.97,
    //     "image": "https://m.media-amazon.com/images/I/61g3sdR4eDL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07HKLZZRV",
    //     "name": "Under Armour Men's Charged Commit 2.0 Cross Trainer",
    //     "regularPrice": 59.99,
    //     "salePrice": 59.99,
    //     "image": "https://m.media-amazon.com/images/I/71TuGlzCH2L._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07BL2XQNV",
    //     "name": "New Balance Men's 680 V6 Cushioning Running Shoe",
    //     "regularPrice": 59.96,
    //     "salePrice": 59.96,
    //     "image": "https://m.media-amazon.com/images/I/71z915DDAIL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B0714BHD6C",
    //     "name": "adidas Women's Cloudfoam Qt Racer Running Shoe",
    //     "regularPrice": 59.98,
    //     "salePrice": 59.98,
    //     "image": "https://m.media-amazon.com/images/I/51FXRJ4NB1L._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B072BVVBNG",
    //     "name": "adidas Women's Cloudfoam Pure Running Shoe",
    //     "regularPrice": 45.0,
    //     "salePrice": 45.0,
    //     "image": "https://m.media-amazon.com/images/I/61zLDSMp+5L._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B071LF7VL8",
    //     "name": "adidas Men's Lite Racer Adapt Running Shoe",
    //     "regularPrice": 48.74,
    //     "salePrice": 48.74,
    //     "image": "https://m.media-amazon.com/images/I/81WqANXnjaL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07K2LNYSL",
    //     "name": "Under Armour Men's Charged Impulse Running Shoe",
    //     "regularPrice": 52.5,
    //     "salePrice": 52.5,
    //     "image": "https://m.media-amazon.com/images/I/61JQ4VsWDNL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B01C3LK9KY",
    //     "name": "PUMA Men's Tazon 6 Fracture FM Cross-Trainer Shoe",
    //     "regularPrice": 39.99,
    //     "salePrice": 39.99,
    //     "image": "https://m.media-amazon.com/images/I/61vRcRCE8LL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07D9MGRH4",
    //     "name": "adidas  Women's Lite Racer w Running Shoe",
    //     "regularPrice": null,
    //     "salePrice": null,
    //     "image": "https://m.media-amazon.com/images/I/81Q9Oaf18lL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07BL2PZMX",
    //     "name": "New Balance Women's Arishi V2 Fresh Foam Running Shoe",
    //     "regularPrice": null,
    //     "salePrice": null,
    //     "image": "https://m.media-amazon.com/images/I/61M4FCzbsvL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07L7BN3FV",
    //     "name": "adidas  Men's CF Lite Racer Byd",
    //     "regularPrice": 63.0,
    //     "salePrice": 63.0,
    //     "image": "https://m.media-amazon.com/images/I/81YzhFF9siL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07S57HKJK",
    //     "name": "adidas Women's Cloudfoam Pure Running Shoe, Grey Mãtallique Blanc Craie Corail VIF",
    //     "regularPrice": 61.44,
    //     "salePrice": 61.44,
    //     "image": "https://m.media-amazon.com/images/I/81UBMVIHHXL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B00NUZD2PW",
    //     "name": "ASICS Men's GEL Venture 5 Running Shoe",
    //     "regularPrice": 69.95,
    //     "salePrice": 69.95,
    //     "image": "https://m.media-amazon.com/images/I/91A+mJMIqRL._AC_UY218_.jpg"
    //   },
    //   {
    //     "productId": null,
    //     "retailerId": 2,
    //     "sku": "B07C6MXKYD",
    //     "name": "Brooks Mens Adrenaline GTS 19 Running Shoe",
    //     "regularPrice": 89.99,
    //     "salePrice": 89.99,
    //     "image": "https://m.media-amazon.com/images/I/71NyNAZLzJL._AC_UY218_.jpg"
    //   }
    // ];

  }



}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products: Product[] = []

  searchString: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.productService.search(this.searchString).subscribe(data => {
      /** pass recieved data to propery */
      this.products = data;
    });
  }



}
